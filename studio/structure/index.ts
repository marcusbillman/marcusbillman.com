import type { StructureResolver } from 'sanity/structure';

import { ImagesIcon } from '@sanity/icons';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('marcusbillman.com')
    .items([
      orderableDocumentListDeskItem({
        type: 'project',
        title: 'Projects',
        icon: ImagesIcon,
        id: 'orderable-projects-all',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'project',
        filter: 'language == "en"',
        title: 'Projects (EN)',
        icon: ImagesIcon,
        id: 'orderable-projects-en',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'project',
        filter: 'language == "sv"',
        title: 'Projects (SV)',
        icon: ImagesIcon,
        id: 'orderable-projects-sv',
        S,
        context,
      }),
    ]);
