import type {StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {ImagesIcon} from '@sanity/icons'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('marcusbillman.com')
    .items([
      orderableDocumentListDeskItem({
        type: 'project',
        title: 'Projects',
        icon: ImagesIcon,
        S,
        context,
      }),
    ])
