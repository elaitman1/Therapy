import type { MetadataRoute } from 'next'

import { clientEnv } from '@/env/client'

export const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      disallow: ['*?*=*', '*?*=*&*=*', '*?*=*=*']
    },
    sitemap: `${clientEnv.NEXT_PUBLIC_APP_URL}/sitemap.xml`
  }
}
export default robots
