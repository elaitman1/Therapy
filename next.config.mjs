import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

import rehypeShiki from '@leafac/rehype-shiki'
import nextMDX from '@next/mdx'
import { Parser } from 'acorn'
import jsx from 'acorn-jsx'
import escapeStringRegexp from 'escape-string-regexp'
import createJiti from 'jiti'
import { recmaImportImages } from 'recma-import-images'
import rehypeUnwrapImages from 'rehype-unwrap-images'
import remarkGfm from 'remark-gfm'
import { remarkRehypeWrap } from 'remark-rehype-wrap'
import shiki from 'shiki'
import { unifiedConditional } from 'unified-conditional'

const jiti = createJiti(fileURLToPath(import.meta.url))
jiti('./src/env/client.ts')
jiti('./src/env/server.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  eslint: {
    dirs: [
      'src',
      'eslint.config.mjs',
      'next.config.ts',
      'postcss.config.mjs',
      'prettier.config.mjs',
      'tailwind.config.ts'
    ],
    ignoreDuringBuilds: true
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx']
}

function remarkMDXLayout(source, metaName) {
  const parser = Parser.extend(jsx())
  const parseOptions = { ecmaVersion: 'latest', sourceType: 'module' }

  return tree => {
    const imp = `import _Layout from '${source}'`
    const exp = `export default function Layout(props) {
      return <_Layout {...props} ${metaName}={${metaName}} />
    }`

    tree.children.push(
      {
        type: 'mdxjsEsm',
        value: imp,
        data: { estree: parser.parse(imp, parseOptions) }
      },
      {
        type: 'mdxjsEsm',
        value: exp,
        data: { estree: parser.parse(exp, parseOptions) }
      }
    )
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const config = async () => {
  const highlighter = await shiki.getHighlighter({
    theme: 'css-variables'
  })

  const withMDX = nextMDX({
    extension: /\.mdx$/,
    options: {
      recmaPlugins: [recmaImportImages],
      rehypePlugins: [
        [rehypeShiki, { highlighter }],
        rehypeUnwrapImages,
        [
          remarkRehypeWrap,
          {
            node: { type: 'mdxJsxFlowElement', name: 'Typography' },
            start: ':root > :not(mdxJsxFlowElement)',
            end: ':root > mdxJsxFlowElement'
          }
        ]
      ],
      remarkPlugins: [
        remarkGfm,
        [
          unifiedConditional,
          [
            new RegExp(`^${escapeStringRegexp(path.resolve('src/app/blog'))}`),
            [[remarkMDXLayout, '@/app/blog/wrapper', 'article']]
          ],
          [
            new RegExp(
              `^${escapeStringRegexp(path.resolve('src/app/therapies'))}`
            ),
            [[remarkMDXLayout, '@/app/therapies/wrapper', 'therapy']]
          ]
        ]
      ]
    }
  })

  return withMDX(nextConfig)
}

export default config
