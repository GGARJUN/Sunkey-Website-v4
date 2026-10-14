import type { CollectionConfig } from 'payload'

/**
 * Blog / Resources — engineering articles published on /resources.
 * Articles position Sunkey as a technical authority and support organic SEO
 * on the engineering topics their ICP searches for.
 *
 * Target: 6–8 articles at launch (Batch 5), then ongoing.
 */
export const Blog: CollectionConfig = {
  slug: 'blog',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', 'updatedAt'],
    description: 'Engineering articles published on the Resources page.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Article Title',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description:
          'URL-safe slug for /resources/[slug]. Set once — do not change after publishing.',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      label: 'Excerpt',
      admin: {
        description:
          'Shown on the listing page and used as the meta description. Under 160 characters.',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Category',
      options: [
        { label: 'PCB Design',        value: 'pcb-design'        },
        { label: 'Embedded Firmware', value: 'embedded-firmware' },
        { label: 'IoT & Wireless',    value: 'iot-wireless'      },
        { label: 'FPGA & High-Speed', value: 'fpga-high-speed'   },
        { label: 'Drone & UAV',       value: 'drone-uav'         },
        { label: 'Manufacturing',     value: 'manufacturing'     },
        { label: 'Industry Insights', value: 'industry-insights' },
      ],
    },
    {
      name: 'author',
      type: 'text',
      label: 'Author',
      defaultValue: 'Sunkey Engineering Team',
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      label: 'Published Date',
      admin: { date: { pickerAppearance: 'dayOnly' } },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Article Content',
    },
  ],
}
