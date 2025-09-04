import type { FC, PropsWithChildren } from 'react'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { formatDate } from '@/lib/formatDate'
import type { Article, MDXEntry } from '@/lib/mdx'

const BlogArticleWrapper: FC<
  PropsWithChildren<{
    article: MDXEntry<Article>
  }>
> = ({ article }) => {
  return (
    <RootLayout>
      <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <header className="mx-auto flex max-w-5xl flex-col text-center">
            <h1 className="font-display mt-6 text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-6xl">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first text-sm text-neutral-950"
            >
              {formatDate(article.date)}
            </time>
          </header>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}

export default BlogArticleWrapper
