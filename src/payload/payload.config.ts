import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users }       from './collections/Users'
import { Media }       from './collections/Media'
import { CaseStudies } from './collections/CaseStudies'
import { Blog }        from './collections/Blog'

const filename = fileURLToPath(import.meta.url)
const dirname  = path.dirname(filename)

export default buildConfig({
  /* ── Admin panel ────────────────────────────────────── */
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— Sunkey CMS',
    },
  },

  /* ── Collections ─────────────────────────────────────── */
  collections: [Users, Media, CaseStudies, Blog],

  /* ── Database ────────────────────────────────────────── */
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? '',
    },
  }),

  /* ── Rich text editor ────────────────────────────────── */
  editor: lexicalEditor({}),

  /* ── Security ────────────────────────────────────────── */
  secret: process.env.PAYLOAD_SECRET ?? '',

  /* ── TypeScript output ───────────────────────────────── */
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  /* ── Image processing ────────────────────────────────── */
  sharp,

  /* ── GraphQL ─────────────────────────────────────────── */
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },
})
