/**
 * Distinct Unsplash images per service slug.
 * Used in related service cards across ServiceDetailPage,
 * IndustryDetailPage, and TechnologyPage.
 */
export const SERVICE_IMAGES: Record<string, string> = {
  'pcb-design':
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop',
  'embedded-firmware':
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80&auto=format&fit=crop',
  'pcba-manufacturing':
    'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80&auto=format&fit=crop',
  'iot-wireless':
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop',
  'drone-uav-electronics':
    'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80&auto=format&fit=crop',
  'high-speed-fpga-design':
    'https://images.unsplash.com/photo-1562408590-e32931084e23?w=600&q=80&auto=format&fit=crop',
  'contract-engineering':
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop',
  'cable-harness-box-build':
    'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80&auto=format&fit=crop',
  'rapid-prototyping':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop',
}

/** Fallback for any service slug not explicitly mapped */
export const SERVICE_IMAGE_FALLBACK =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop'
