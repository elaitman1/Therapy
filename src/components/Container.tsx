import clsx from 'clsx'
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode
} from 'react'

type ContainerProps<T extends ElementType> = {
  as?: T
  className?: string
  children: ReactNode
}

export const Container = <T extends ElementType = 'div'>({
  as,
  className,
  children
}: Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>): ReactElement => {
  const Component = as ?? 'div'

  return (
    <Component className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  )
}
