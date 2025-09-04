import glob from 'fast-glob'

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string
): Promise<Array<MDXEntry<T>>> {
  const blobs = await glob('**/page.mdx', { cwd: `src/app/${directory}` })

  const data = await Promise.all(
    blobs.map(async filename => {
      const promise = await import(`../app/${directory}/${filename}`)

      const metadata = promise[metaName] as T
      return {
        ...metadata,
        metadata,
        href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`
      }
    })
  )

  return data.sort((a, b) => b.date.localeCompare(a.date))
}

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  link: string
  image: string
}

export interface Therapy {
  title: string
  description: string
  image: string
  date: string
}

export async function loadArticles(): Promise<Array<MDXEntry<Article>>> {
  return loadEntries<Article>('blog', 'article')
}

export async function loadTherapies(): Promise<Array<MDXEntry<Therapy>>> {
  return loadEntries<Therapy>('therapies', 'therapy')
}
