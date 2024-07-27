import { dashboardTool, projectInfoWidget } from '@sanity/dashboard';
import { documentInternationalization } from '@sanity/document-internationalization';
import { visionTool } from '@sanity/vision';
import { defineConfig, SchemaTypeDefinition } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

export default defineConfig({
  name: 'default',
  title: 'marcusbillman.com-2024',
  projectId: '2l3afo6f',
  dataset: 'production',
  plugins: [
    structureTool({ structure }),
    dashboardTool({
      widgets: [projectInfoWidget()],
    }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { id: 'en', title: 'English' },
        { id: 'sv', title: 'Swedish' },
      ],
      schemaTypes: ['project'],
    }),
  ],
  schema: {
    types: schemaTypes as SchemaTypeDefinition[],
  },
});
