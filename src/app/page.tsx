import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { Testimonial } from '@/components/Testimonial'
import { loadTherapies, type MDXEntry, type Therapy } from '@/lib/mdx'

const TherapyOptions: FC<{
  therapies: Array<MDXEntry<Therapy>>
}> = ({ therapies }) => {
  return (
    <>
      <SectionIntro
        title="Therapy Options Tailored to You"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Explore a range of personalized therapy options designed to support
          your unique journey
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {therapies.map(therapy => (
            <FadeIn key={therapy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <Link href={therapy.href}>
                  <span className="absolute inset-0 rounded-3xl" />
                  <Image
                    src={therapy.image}
                    alt={therapy.title}
                    width={400}
                    height={400}
                    className="mb-4 w-full rounded-3xl object-contain object-center"
                    unoptimized
                  />
                </Link>
                <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
                  {therapy.title}
                </p>
                <p className="mt-4 line-clamp-2 text-base text-neutral-600">
                  {therapy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

const Home: FC = async () => {
  const allTherapies = await loadTherapies()

  const therapies = allTherapies.slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn className="order-2 max-w-3xl lg:order-1">
            <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
              Transforming Therapy Together
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Therapy should be a place where you can say what’s on your mind
              without fear of judgment. During our sessions, you're in the
              driver's seat, and I'm right there beside you, your family and/or
              partner as we explore the twists and turns of your inner world(s).
              Along the way, I draw on what I call my 'superpowers' which are
              the combinations of my lived experience with OCD and ADHD which
              give me a unique ability to pick up on subtle patterns and details
              along with my trainings in psychoanalysis, CBT (ACT, ERP), somatic
              work, dissociation, etc. which enable me to step back and see the
              bigger picture as we get to the root of issues.
            </p>
            <p className="mt-6 text-xl text-neutral-600">
              I've also lived a few lives before becoming a therapist. My
              background spans careers in banking & software,counseling in
              school systems in Compton,working community clinics,teaching yoga
              and supporting veterans through counseling. These experiences help
              me connect with clients who are navigating major life
              transitions,searching for a deeper sense of purpose.
            </p>
            <p className="mt-6 text-xl text-neutral-600">
              Finally, I welcome feedback like “do more of this” or “less of
              that” because therapy isn’t like other relationships — you don’t
              need to worry about formalities or protecting my feelings.
              Together, we won’t just manage symptoms; we’ll work toward real,
              lasting change. Looking forward to working with you!
            </p>
            <p className="mt-6 text-xl text-neutral-600">Specialties:</p>
            <ul className="mt-2 list-disc pl-4 text-xl text-neutral-600">
              <li>
                OCD - Depersonalization - Derealization - Panic Disorder -
                Relationships - Intimacy - Personality Disorders - Boundary and
                Assertiveness Issues - Balanitis - Trauma - Individuals -
                Children - Couples - Families - Veterans - Yoga - Breathwork
              </li>
            </ul>
            <p className="mt-6 text-xl text-neutral-600">Ages: All Ages</p>
          </FadeIn>

          <FadeIn className="order-1 lg:order-2">
            <Image
              src="/hero.jpeg"
              alt="Hero image"
              width={500}
              height={400}
              className="h-auto w-full rounded-3xl object-cover md:max-w-md md:object-contain lg:max-w-lg lg:justify-self-end"
            />
          </FadeIn>
        </div>
      </Container>

      <TherapyOptions therapies={therapies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia' }}
      >
        Eric Laitman Therapy helped me navigate through some of my toughest
        challenges. Their approach was both compassionate and effective,
        allowing me to make real progress in my personal growth.
      </Testimonial>

      <ContactSection />
    </RootLayout>
  )
}

export default Home
