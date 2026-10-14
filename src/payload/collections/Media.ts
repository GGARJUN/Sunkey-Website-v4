import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'public/media',
    mimeTypes: ['image/*'],
  },
  admin: {
    description: 'Images and media assets used across the site.',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt Text',
      required: true,
      admin: {
        description:
          'Describe what is in this image. Required for accessibility and SEO.',
      },
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption (optional)',
    },
  ],
}
