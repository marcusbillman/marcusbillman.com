import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {dashboardTool, projectInfoWidget} from '@sanity/dashboard'
import {vercelWidget} from 'sanity-plugin-dashboard-widget-vercel'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'marcusbillman.com-2024',
  projectId: '2l3afo6f',
  dataset: 'production',
  plugins: [
    structureTool({structure}),
    dashboardTool({
      widgets: [vercelWidget({layout: {width: 'medium'}}), projectInfoWidget()],
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
