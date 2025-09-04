import type { MetadataRoute } from 'next'

import { ABSOLUTE_ROUTES } from '@/constants/routes'
import { clientEnv } from '@/env/client'

export default function sitemap(): MetadataRoute.Sitemap {
  const topPriorityRoutes = [clientEnv.NEXT_PUBLIC_APP_URL]

  const otherRoutes = [
    `${clientEnv.NEXT_PUBLIC_APP_URL}${ABSOLUTE_ROUTES.FAQS}`,
    `${clientEnv.NEXT_PUBLIC_APP_URL}${ABSOLUTE_ROUTES.ABOUT}`,
    `${clientEnv.NEXT_PUBLIC_APP_URL}${ABSOLUTE_ROUTES.MEDIA_PUBLICATIONS}`,
    `${clientEnv.NEXT_PUBLIC_APP_URL}${ABSOLUTE_ROUTES.CONTACT_US}`
  ]

  const topPrioritySitemap: MetadataRoute.Sitemap = topPriorityRoutes.map(
    route => ({
      url: route,
      changeFrequency: 'weekly',
      priority: 1
    })
  )

  const otherSitemap: MetadataRoute.Sitemap = otherRoutes.map(route => ({
    url: route,
    changeFrequency: 'weekly',
    priority: 0.8
  }))

  return [...topPrioritySitemap, ...otherSitemap]
}
