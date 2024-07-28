import type { StructureResolver } from 'sanity/structure';

import { BellIcon, ImagesIcon } from '@sanity/icons';
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
      S.divider(),
      S.listItem()
        .id('newsBanner-en')
        .schemaType('newsBanner')
        .title('News Banner (EN)')
        .icon(BellIcon)
        .child(
          S.editor()
            .id('newsBanner-en')
            .schemaType('newsBanner')
            .documentId('newsBanner-en')
            .title('News Banner (EN)'),
        ),
      S.listItem()
        .id('newsBanner-sv')
        .schemaType('newsBanner')
        .title('News Banner (SV)')
        .icon(BellIcon)
        .child(
          S.editor()
            .id('newsBanner-sv')
            .schemaType('newsBanner')
            .documentId('newsBanner-sv')
            .title('News Banner (SV)'),
        ),
    ]);
