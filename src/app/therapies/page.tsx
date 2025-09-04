import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { Testimonial } from '@/components/Testimonial'
import { loadTherapies, type MDXEntry, type Therapy } from '@/lib/mdx'

const Therapies: FC<{ therapies: Array<MDXEntry<Therapy>> }> = ({
  therapies
}) => {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Therapies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {therapies.map(therapy => (
          <FadeIn key={therapy.title}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={therapy.image}
                      alt=""
                      width={400}
                      height={400}
                      className="size-[280px] flex-none rounded-xl"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={therapy.href}>{therapy.title}</Link>
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>{therapy.description}</p>
                  </div>
                  <div className="mt-8 flex">
                    <Button href={therapy.href}>Explore Therapy</Button>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.'
}

const Work: FC = async () => {
  const therapies = await loadTherapies()

  return (
    <RootLayout>
      <PageIntro
        eyebrow="Therapies"
        title="Therapy for the Good, Bad, and Uncomfortable"
      >
        <p>
          Therapy should be a place where you can say the good, bad, and the
          uncomfortable - even about your therapist. No need to package things
          nicely. I’m all ears, judgment free to celebrate the gift of you.
        </p>
      </PageIntro>

      <Therapies therapies={therapies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Mail Smirk' }}
      >
        The support I received from Eric Laitman Therapy was truly
        life-changing. The therapist created a safe and understanding space that
        made it easy for me to open up and heal.
      </Testimonial>

      <ContactSection />
    </RootLayout>
  )
}

export default Work
