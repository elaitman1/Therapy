'use client'

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform
} from 'framer-motion'
import Image, { type ImageProps } from 'next/image'
import { type ComponentRef, type FC, useRef } from 'react'

const MotionImage = motion(Image)

export const GrayscaleTransitionImage: FC<
  Pick<ImageProps, 'src' | 'quality' | 'className' | 'sizes' | 'priority'> & {
    alt?: string
  }
> = props => {
  const ref = useRef<ComponentRef<'div'>>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 35%']
  })
  const grayscale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1])
  const filter = useMotionTemplate`grayscale(${grayscale})`

  return (
    <div ref={ref} className="group relative overflow-hidden">
      <MotionImage
        alt=""
        style={{ filter }}
        {...props}
        width={600}
        height={600}
      />
      <div
        className="pointer-events-none absolute top-0 left-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      >
        <Image alt="" {...props} width={600} height={600} />
      </div>
    </div>
  )
}
