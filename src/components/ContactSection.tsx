import type { FC } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { ABSOLUTE_ROUTES } from '@/constants/routes'

export const ContactSection: FC = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Book your appointment today!
            </h2>
            <div className="mt-6 flex">
              <Button href={ABSOLUTE_ROUTES.CONTACT_US} invert>
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
