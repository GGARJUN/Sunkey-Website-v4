import type { Metadata } from 'next'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../../importMap.js'
import configPromise from '@payload-config'

/**
 * Payload CMS admin panel.
 * Catch-all route handles all /admin/* paths.
 *
 * Note: force-dynamic because admin reads from the database on every request.
 * The (payload) route group ensures this layout does not inherit
 * the public site Navbar or Footer.
 */
export const dynamic = 'force-dynamic'

type Args = {
  params:       Promise<{ segments: string[] }>
  searchParams: Promise<Record<string, string | string[]>>
}

export async function generateMetadata({ params, searchParams }: Args): Promise<Metadata> {
  return generatePageMetadata({ config: configPromise, params, searchParams })
}

export default async function Page({ params, searchParams }: Args) {
  return RootPage({ config: configPromise, importMap, params, searchParams })
}
