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
import { formatDate } from '@/lib/formatDate'
import { loadArticles } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Explore the latest articles, interviews, and features from Eric Laitman Therapy. Stay informed with insights and expert advice on mental well-being.'
}

const Blog: FC = async () => {
  const articles = await loadArticles()

  return (
    <RootLayout>
      <PageIntro eyebrow="Publications" title="Our latest articles">
        <p>
          Stay informed with the latest insights and expert advice from Eric
          Laitman Therapy. Browse through articles, interviews, and features
          that highlight our approach and the impact of therapy on mental
          well-being.
        </p>
      </PageIntro>

      <Container>
        <FadeIn className="mt-10 w-full space-y-6 text-base">
          <Image
            src="/publications.jpeg"
            alt="Publications photo"
            width={1000}
            height={400}
            className="w-full rounded-3xl"
          />
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-24 lg:space-y-32">
          {articles.map(article => (
            <FadeIn key={article.href}>
              <article>
                <Border className="pt-16">
                  <div className="relative lg:-mx-4 lg:flex lg:justify-end">
                    <div className="pt-10 lg:w-2/3 lg:flex-none lg:px-4 lg:pt-0">
                      <h2 className="font-display text-2xl font-semibold text-neutral-950">
                        <Link href={article.link}>{article.title}</Link>
                      </h2>
                      <dl className="lg:absolute lg:top-0 lg:left-0 lg:w-1/3 lg:px-4">
                        <div>
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={200}
                            height={200}
                            className="mb-4 h-[200px] w-full rounded-lg object-cover object-center"
                          />
                        </div>
                        <dt className="sr-only">Published</dt>
                        <dd className="absolute top-0 left-0 text-sm text-neutral-950 lg:static">
                          <time dateTime={article.date}>
                            {formatDate(article.date)}
                          </time>
                        </dd>
                      </dl>
                      <Button
                        href={article.link}
                        aria-label={`Read more: ${article.title}`}
                        className="mt-8"
                      >
                        Read more
                      </Button>
                    </div>
                  </div>
                </Border>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}

export default Blog
