import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://easystage.nl',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Add more URLs as your site grows
    // {
    //   url: 'https://easystage.nl/about',
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
    // {
    //   url: 'https://easystage.nl/stages',
    //   lastModified: new Date(),
    //   changeFrequency: 'daily',
    //   priority: 0.9,
    // },
  ]
}
