import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    description: 'Admin users who can manage content in the CMS.',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
    },
  ],
}
