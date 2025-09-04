import type { MDXComponents as MDXComponentsType } from 'mdx/types'

import { MDXComponents } from '@/components/MDXComponents'

export const useMDXComponents = (
  components: MDXComponentsType
): MDXComponentsType => {
  return {
    ...components,
    ...MDXComponents
  }
}
