import Link from 'next/link'
import type { FC } from 'react'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { SocialMedia, socialMediaProfiles } from '@/components/SocialMedia'
import { ABSOLUTE_ROUTES } from '@/constants/routes'

const navigation = [
  {
    title: 'Company',
    links: [
      { title: 'About Me', href: ABSOLUTE_ROUTES.ABOUT },
      { title: 'FAQs', href: ABSOLUTE_ROUTES.FAQS },
      { title: 'Contact us', href: ABSOLUTE_ROUTES.CONTACT_US },
      { title: 'Media Publications', href: ABSOLUTE_ROUTES.MEDIA_PUBLICATIONS }
    ]
  },
  {
    title: 'Connect',
    links: socialMediaProfiles
  }
]

const Navigation: FC = () => {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export const Footer: FC = () => {
  return (
    <Container
      as="footer"
      className="mt-24 w-full border-t border-neutral-950/10 sm:mt-32 lg:mt-40"
    >
      <FadeIn className="flex justify-between py-12">
        <div className="mb-20 flex flex-col gap-x-6 gap-y-4">
          <Link href={ABSOLUTE_ROUTES.HOME} aria-label="Home">
            <Logo className="h-8" />
          </Link>
          <SocialMedia className="mt-6" />
        </div>
        <div className="flex w-fit justify-end gap-x-8 gap-y-16">
          <Navigation />
        </div>
      </FadeIn>
    </Container>
  )
}
