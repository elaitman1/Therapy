import clsx from 'clsx'
import Link from 'next/link'
import type { ComponentPropsWithoutRef, FC } from 'react'

type ButtonProps = {
  invert?: boolean
} & (
  | ComponentPropsWithoutRef<typeof Link>
  // eslint-disable-next-line sonarjs/no-redundant-optional
  | (ComponentPropsWithoutRef<'button'> & { href?: undefined })
)

export const Button: FC<ButtonProps> = ({
  invert = false,
  className,
  children,
  ...props
}) => {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-neutral-950 hover:bg-neutral-200'
      : 'bg-neutral-950 text-white hover:bg-neutral-800'
  )

  const inner = <span className="relative top-px">{children}</span>

  if (props.href === undefined) {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
