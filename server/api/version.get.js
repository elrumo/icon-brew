import { readFile } from 'node:fs/promises'

export default defineEventHandler(async () => {
  let buildId = 'unknown'

  try {
    buildId = (await readFile('/app/.build-id', 'utf-8')).trim()
  } catch {
    // Not running in the built Docker image (e.g. local `nuxt dev`)
  }

  return { buildId }
})
