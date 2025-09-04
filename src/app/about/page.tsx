import type { Metadata } from 'next'
import Image from 'next/image'
import type { FC } from 'react'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { RootLayout } from '@/components/RootLayout'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'About Us'
}

const About: FC = async () => {
  const allArticles = await loadArticles()

  const blogArticles = allArticles.slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About me" title="Embrace the SUCK.">
        <></>
      </PageIntro>
      <Container>
        <FadeIn className="mt-10 w-full space-y-6 text-base">
          <Image
            src="/about-me.jpeg"
            alt="About photo"
            width={1000}
            height={400}
            className="w-full rounded-3xl"
          />
        </FadeIn>

        <FadeIn>
          <p className="mt-6 text-xl text-neutral-600">
            Looking above, you’d never guess I have Obsessive Compulsive
            Disorder and experience dissociation. However, these days it
            probably wouldn’t meet the criteria for a diagnosis, thanks to the
            suck I’ve embraced and tools I use to handle it.
            <br />
            <br />
            Before becoming a therapist, I spent years building careers in
            banking and tech in New York and LA—both successful on paper, but
            neither truly aligned with who I was or what I cared about. It
            wasn’t until doing my own inner work that therapy came calling.
            <br />
            <br />
            Today, I offer a multidimensional approach to compliment talk
            therapy weaving together Internal Family Systems, breathwork,
            body-based practices, and even holistic support for skin and
            nutrition.
            <br />
            <br />
            Being a male therapist in this field is something I hold with deep
            respect recognizing the unique role I play in offering a corrective
            emotional experience and creating a safe space for trust,
            vulnerability, and meaningful insight.
          </p>
        </FadeIn>
      </Container>

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Explore articles that delve into various aspects of therapy, mental health, and personal growth."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}

export default About
