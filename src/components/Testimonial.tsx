import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export const Testimonial: FC<
  PropsWithChildren<{
    client: { name: string }
    className?: string
  }>
> = ({ children, client, className }) => {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_50%,transparent_60%)] fill-neutral-100 stroke-neutral-950/5"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="font-display relative text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <h2 className="font-display text-lg font-semibold tracking-tight text-neutral-950">
                ~ {client.name}
              </h2>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
