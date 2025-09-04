import clsx from 'clsx'
import type { ComponentPropsWithoutRef, FC } from 'react'

export const Logomark: FC<ComponentPropsWithoutRef<'h1'>> = ({
  className,
  ...props
}) => {
  return (
    <h1 className={clsx(className, 'text-xl font-semibold')} {...props}>
      ELT.
    </h1>
  )
}

export const Logo: FC<ComponentPropsWithoutRef<'h1'>> = ({
  className,
  ...props
}) => {
  return (
    <h1 className={clsx(className, 'text-xl font-semibold')} {...props}>
      Eric Laitman Therapy
    </h1>
  )
}
