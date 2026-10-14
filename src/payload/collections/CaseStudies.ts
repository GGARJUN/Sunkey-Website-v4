import type { CollectionConfig } from 'payload'

/**
 * Case Studies — managed via Payload CMS.
 * The initial 3 case studies are seeded from src/lib/data/caseStudies.ts.
 * Future projects are added here by admin.
 *
 * Fields are designed to match the CaseStudyData interface in
 * src/lib/data/caseStudies.ts for consistent rendering.
 */
export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'vertical', 'location', 'updatedAt'],
    description: 'Project case studies — client details must be fully anonymized.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project Title',
      admin: { description: 'Short title — shown in cards and page headline.' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL Slug',
      admin: {
        description:
          'URL-safe slug. Used in /case-studies/[slug]. Set once and do not change.',
      },
    },
    {
      name: 'vertical',
      type: 'select',
      required: true,
      label: 'Industry Vertical',
      options: [
        'PCB Design',
        'Drone & UAV',
        'IoT & Industrial',
        'Semiconductor',
        'Industrial Automation',
        'Automotive',
        'Agricultural Technology',
        'Contract Engineering',
      ],
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      label: 'Customer Region',
      admin: {
        description:
          'Region only — no company name. E.g., "USA Customer", "European Customer".',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Summary Description',
      admin: {
        description: '2–3 sentence summary shown on cards and in the page intro.',
      },
    },
    {
      name: 'specs',
      type: 'array',
      label: 'Technical Specs',
      admin: { description: 'Key technical highlights shown as spec pills.' },
      fields: [
        {
          name: 'spec',
          type: 'text',
          required: true,
          label: 'Spec',
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Full Case Study Content',
      admin: {
        description: 'Full write-up of the project — problem, approach, and outcome.',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published Date',
      admin: { date: { pickerAppearance: 'dayOnly' } },
    },
  ],
}
