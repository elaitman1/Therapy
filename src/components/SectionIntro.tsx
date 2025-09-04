import clsx from 'clsx'
import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export const SectionIntro: FC<
  Omit<ComponentPropsWithoutRef<typeof Container>, 'title' | 'children'> & {
    title: string
    eyebrow?: string
    children?: ReactNode
    smaller?: boolean
    invert?: boolean
  }
> = ({
  title,
  eyebrow,
  children,
  smaller = false,
  invert = false,
  ...props
}) => {
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2>
          {eyebrow != null && (
            <>
              <span
                className={clsx(
                  'font-display mb-6 block text-base font-semibold',
                  invert ? 'text-white' : 'text-neutral-950'
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              'font-display block tracking-tight text-balance',
              smaller
                ? 'text-2xl font-semibold'
                : 'text-4xl font-medium sm:text-5xl',
              invert ? 'text-white' : 'text-neutral-950'
            )}
          >
            {title}
          </span>
        </h2>
        {children != null && (
          <div
            className={clsx(
              'mt-6 text-xl',
              invert ? 'text-neutral-300' : 'text-neutral-600'
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  )
}
