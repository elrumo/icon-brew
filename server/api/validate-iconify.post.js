import { IconSet } from '@iconify/tools'

export default defineEventHandler(async (event) => {
  try {
    // Only allow POST requests
    if (event.node.req.method !== 'POST') {
      throw createError({
        statusCode: 405,
        statusMessage: 'Method Not Allowed'
      })
    }

    // Parse multipart form data
    const form = await readMultipartFormData(event)
    
    if (!form || form.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No file provided'
      })
    }

    // Find JSON file
    const jsonFile = form.find(file => 
      file.filename && file.filename.endsWith('.json')
    )

    if (!jsonFile) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No JSON file found'
      })
    }

    // Parse JSON content
    let iconSetData
    try {
      const jsonContent = jsonFile.data.toString('utf-8')
      iconSetData = JSON.parse(jsonContent)
    } catch (error) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid JSON format',
        data: { error: error.message }
      })
    }

    // Validate using @iconify/tools
    const validationResults = {
      isValid: true,
      errors: [],
      warnings: [],
      info: {},
      icons: [],
      aliases: []
    }

    try {
      // Try to create IconSet instance - this will validate the structure
      const iconSet = new IconSet(iconSetData)
      
      // Gather information
      validationResults.info = {
        prefix: iconSet.prefix,
        iconCount: iconSet.count(),
        totalIcons: Object.keys(iconSetData.icons || {}).length,
        aliasCount: Object.keys(iconSetData.aliases || {}).length,
        fileSize: jsonFile.data.length,
        hasInfo: !!iconSetData.info,
        version: iconSetData.info?.version || 'unknown'
      }
      
      // List icons
      validationResults.icons = Object.keys(iconSetData.icons || {})
      
      // List aliases with their parents
      if (iconSetData.aliases) {
        validationResults.aliases = Object.entries(iconSetData.aliases).map(([name, alias]) => ({
          name,
          parent: alias.parent,
          hasTransforms: !!(alias.hFlip || alias.vFlip || alias.rotate)
        }))
      }
      
      // Test a few icons to make sure they can be converted to SVG
      const testIcons = validationResults.icons.slice(0, 3)
      for (const iconName of testIcons) {
        try {
          const svgContent = iconSet.toString(iconName)
          if (!svgContent || !svgContent.includes('<svg')) {
            validationResults.warnings.push(`Icon "${iconName}" failed SVG conversion test`)
          }
        } catch (error) {
          validationResults.errors.push(`Icon "${iconName}" SVG conversion failed: ${error.message}`)
          validationResults.isValid = false
        }
      }
      
      // Test aliases
      for (const alias of validationResults.aliases.slice(0, 3)) {
        try {
          const svgContent = iconSet.toString(alias.name)
          if (!svgContent || !svgContent.includes('<svg')) {
            validationResults.warnings.push(`Alias "${alias.name}" failed SVG conversion test`)
          }
        } catch (error) {
          validationResults.errors.push(`Alias "${alias.name}" SVG conversion failed: ${error.message}`)
          validationResults.isValid = false
        }
      }
      
    } catch (error) {
      validationResults.isValid = false
      validationResults.errors.push(`IconSet creation failed: ${error.message}`)
    }

    // Additional manual checks
    try {
      // Check required fields
      if (!iconSetData.prefix) {
        validationResults.errors.push('Missing required field: prefix')
        validationResults.isValid = false
      }
      
      if (!iconSetData.icons || Object.keys(iconSetData.icons).length === 0) {
        validationResults.errors.push('No icons found in the icon set')
        validationResults.isValid = false
      }
      
      // Check icon structure
      for (const [iconName, iconData] of Object.entries(iconSetData.icons || {})) {
        if (!iconData.body) {
          validationResults.errors.push(`Icon "${iconName}" missing body`)
          validationResults.isValid = false
        }
        
        if (!iconData.width || !iconData.height) {
          validationResults.warnings.push(`Icon "${iconName}" missing width/height dimensions`)
        }
      }
      
      // Check alias references
      for (const [aliasName, aliasData] of Object.entries(iconSetData.aliases || {})) {
        if (!aliasData.parent) {
          validationResults.errors.push(`Alias "${aliasName}" missing parent reference`)
          validationResults.isValid = false
        } else if (!iconSetData.icons[aliasData.parent]) {
          validationResults.errors.push(`Alias "${aliasName}" references non-existent icon "${aliasData.parent}"`)
          validationResults.isValid = false
        }
      }
      
    } catch (error) {
      validationResults.errors.push(`Manual validation error: ${error.message}`)
      validationResults.isValid = false
    }

    return {
      filename: jsonFile.filename,
      ...validationResults
    }

  } catch (error) {
    console.error('Validation API error:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Validation failed',
      data: {
        message: error.message || 'Internal server error',
        details: error.data
      }
    })
  }
})