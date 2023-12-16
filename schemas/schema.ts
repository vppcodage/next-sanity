import { type SchemaTypeDefinition } from 'sanity'

import pages from './pages'
import documentsTypes from './documents'
import globalTypes from './global'
import sectionsTypes from './sections'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...pages, ...documentsTypes, ...globalTypes, ...sectionsTypes],
}
