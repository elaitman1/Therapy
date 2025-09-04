import clsx from 'clsx'
import type { FC, ReactNode } from 'react'

export const TagList: FC<{
  children: ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <ul role="list" className={clsx(className, 'flex flex-wrap gap-4')}>
      {children}
    </ul>
  )
}

export const TagListItem: FC<{
  children: ReactNode
  className?: string
}> = ({ children, className }) => {
  return (
    <li
      className={clsx(
        'rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600',
        className
      )}
    >
      {children}
    </li>
  )
}
