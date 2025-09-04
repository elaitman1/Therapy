import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { StatList, StatListItem } from '@/components/StatList'
import { TagList, TagListItem } from '@/components/TagList'

export const MDXComponents = {
  Blockquote({
    className,
    ...props
  }: ComponentPropsWithoutRef<typeof Blockquote>) {
    return <Blockquote className={clsx('my-32', className)} {...props} />
  },
  img: function Img({
    className,
    ...props
  }: ComponentPropsWithoutRef<typeof GrayscaleTransitionImage>) {
    return (
      <div
        className={clsx(
          'group isolate my-10 overflow-hidden rounded-4xl bg-neutral-100 max-sm:-mx-6',
          className
        )}
      >
        <GrayscaleTransitionImage
          {...props}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="aspect-16/10 w-full object-cover"
        />
      </div>
    )
  },
  StatList({ className, ...props }: ComponentPropsWithoutRef<typeof StatList>) {
    return (
      <StatList className={clsx('my-32 max-w-none!', className)} {...props} />
    )
  },
  StatListItem,
  table: function Table({
    className,
    ...props
  }: ComponentPropsWithoutRef<'table'>) {
    return (
      <div
        className={clsx(
          'my-10 max-sm:-mx-6 max-sm:flex max-sm:overflow-x-auto',
          className
        )}
      >
        <div className="max-sm:min-w-full max-sm:flex-none max-sm:px-6">
          {/* eslint-disable-next-line sonarjs/table-header */}
          <table {...props} />
        </div>
      </div>
    )
  },
  TagList({ className, ...props }: ComponentPropsWithoutRef<typeof TagList>) {
    return <TagList className={clsx('my-6', className)} {...props} />
  },
  TagListItem,
  TopTip({ children, className }: { children: ReactNode; className?: string }) {
    return (
      <Border position="left" className={clsx('my-10 pl-8', className)}>
        <p className="font-display text-sm font-bold tracking-widest text-neutral-950 uppercase">
          Top tip
        </p>
        <div className="mt-4">{children}</div>
      </Border>
    )
  },
  Typography({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return <div className={clsx('typography', className)} {...props} />
  },
  wrapper({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
    return (
      <div
        className={clsx(
          '*:mx-auto *:max-w-3xl [&>:first-child]:mt-0! [&>:last-child]:mb-0!',
          className
        )}
        {...props}
      />
    )
  }
}
