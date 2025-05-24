/** @type {import('sanity').Config} */
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Thermomix Blog',
  projectId: 'ugxlpgbg',
  dataset: 'production',
  
  // Vercel deploy için basePath ekleyelim
  basePath: process.env.SANITY_STUDIO_BASE_PATH || '/studio',
  
  plugins: [
    deskTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  
  // Build ayarları
  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId !== 'settings')
      }
      return prev
    },
  },
})