/**
 * Industry card image URLs — Unsplash photography.
 * Using Unsplash CDN URLs directly (requires Unsplash in next.config.ts remotePatterns).
 * Each image is clean, contextual photography without any text overlay.
 */
export const INDUSTRY_IMAGES: Record<string, string> = {
  // Green PCB macro closeup — clean, professional, abstract enough
  'semiconductor':
    'https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80&auto=format&fit=crop',

  // Industrial manufacturing / automation floor
  'industrial-automation':
    'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80&auto=format&fit=crop',

  // Drone in flight — dramatic aerial shot
  'drone-uav':
    'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&auto=format&fit=crop',

  // IoT / connected devices / smart city
  'iot-smart-devices':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop',

  // Automotive electronics / vehicle
  'automotive':
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80&auto=format&fit=crop',

  // Agricultural technology / precision farming
  'agricultural-technology':
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80&auto=format&fit=crop',
}
