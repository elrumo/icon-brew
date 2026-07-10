// /plugins/iconify.js:

import { addCollection } from '@iconify/vue'
import { validateIconSet } from '@iconify/utils'
import iconSet from '~/assets/ib-icons.json'

export default defineNuxtPlugin(() => {
  const validatedData = validateIconSet(iconSet)
  addCollection(validatedData)
})