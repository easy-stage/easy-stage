import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Zoek je stage - Vind de perfecte stage',
    short_name: 'Zoek je stage',
    description: 'Zoek je stage helpt studenten de perfecte stage te vinden op basis van hun interesses',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['education', 'business'],
    lang: 'nl-NL',
  }
}
