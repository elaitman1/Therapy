import type { FC, PropsWithChildren } from 'react'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import type { MDXEntry, Therapy } from '@/lib/mdx'

const TherapyLayout: FC<
  PropsWithChildren<{
    therapy: MDXEntry<Therapy>
  }>
> = ({ therapy, children }) => {
  return (
    <RootLayout>
      <article className="mt-24 sm:mt-32 lg:mt-40">
        <header>
          <PageIntro eyebrow="Therapy" title={therapy.title} centered>
            <p>{therapy.description}</p>
          </PageIntro>

          <FadeIn className="mt-12">
            <div className="mx-auto -my-px max-w-304 overflow-hidden bg-neutral-200">
              <GrayscaleTransitionImage
                src={therapy.image}
                quality={90}
                className="w-full overflow-hidden rounded-3xl"
                sizes="(min-width: 1216px) 76rem, 100vw"
                priority
              />
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>

      <ContactSection />
    </RootLayout>
  )
}

export default TherapyLayout
