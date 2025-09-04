import clsx from 'clsx'
import type { ComponentPropsWithoutRef, ElementType, ReactElement } from 'react'

type BorderProps<T extends ElementType> = {
  as?: T
  className?: string
  position?: 'top' | 'left'
  invert?: boolean
}

export const Border = <T extends ElementType = 'div'>({
  as,
  className,
  position = 'top',
  invert = false,
  ...props
}: Omit<ComponentPropsWithoutRef<T>, keyof BorderProps<T>> &
  BorderProps<T>): ReactElement => {
  const Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'relative before:absolute after:absolute',
        invert
          ? 'before:bg-white after:bg-white/10'
          : 'before:bg-neutral-950 after:bg-neutral-950/10',
        position === 'top' &&
          'before:top-0 before:left-0 before:h-px before:w-6 after:top-0 after:right-0 after:left-8 after:h-px',
        position === 'left' &&
          'before:top-0 before:left-0 before:h-6 before:w-px after:top-8 after:bottom-0 after:left-0 after:w-px'
      )}
      {...props}
    />
  )
}
