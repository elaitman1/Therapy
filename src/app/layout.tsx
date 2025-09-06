import '@/styles/tailwind.css'

import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'
import { Toaster } from 'sonner'

import { ABSOLUTE_ROUTES } from '@/constants/routes'
import { clientEnv } from '@/env/client'

export const metadata: Metadata = {
  metadataBase: new URL(clientEnv.NEXT_PUBLIC_APP_URL),
  title: {
    template: '%s - Eric Laitman Therapy',
    default:
      'Eric Laitman Therapy - Therapy for the Good, Bad, and Uncomfortable'
  },
  appleWebApp: {
    title: 'Eric Laitman Therapy'
  },
  description:
    'Therapy should be a place where you can say the good, bad, and the uncomfortable - even about your therapist. No need to package things nicely. I’m all ears, judgment free to celebrate the gift of you.',
  openGraph: {
    title: {
      template: '%s - Eric Laitman Therapy',
      default:
        'Eric Laitman Therapy - Therapy for the Good, Bad, and Uncomfortable'
    },
    description:
      'Therapy should be a place where you can say the good, bad, and the uncomfortable - even about your therapist. No need to package things nicely. I’m all ears, judgment free to celebrate the gift of you.',
    url: ABSOLUTE_ROUTES.HOME,
    images: '/hero.jpeg',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      template: '%s - Eric Laitman Therapy',
      default:
        'Eric Laitman Therapy - Therapy for the Good, Bad, and Uncomfortable'
    },
    description:
      'Therapy should be a place where you can say the good, bad, and the uncomfortable - even about your therapist. No need to package things nicely. I’m all ears, judgment free to celebrate the gift of you.',
    images: '/hero.jpeg'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1
  },
  alternates: {
    canonical: '/'
  }
}

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className="h-full text-base antialiased">
      <body className="flex min-h-full flex-col">
        <Toaster />
        {children}
      </body>
    </html>
  )
}

export default Layout
