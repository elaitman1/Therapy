'use client'

import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ComponentType,
  type FC,
  type PropsWithChildren,
  type RefObject,
  useEffect,
  useId,
  useRef,
  useState
} from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'
import { SocialMedia } from '@/components/SocialMedia'
import { ABSOLUTE_ROUTES } from '@/constants/routes'

const XIcon: FC<ComponentPropsWithoutRef<'svg'>> = props => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

const MenuIcon: FC<ComponentPropsWithoutRef<'svg'>> = props => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

const Header: FC<{
  panelId: string
  icon: ComponentType<{ className?: string }>
  expanded: boolean
  onToggle: () => void
  toggleRef: RefObject<HTMLButtonElement | null>
  invert?: boolean
}> = ({
  panelId,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
  invert = false
}) => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link href={ABSOLUTE_ROUTES.HOME} aria-label="Home">
          <Logomark
            className={clsx(
              'h-8 sm:hidden',
              invert ? 'text-white' : 'text-neutral-950'
            )}
          />
          <Logo
            className={clsx(
              'hidden h-8 sm:block',
              invert ? 'text-white' : 'text-neutral-950'
            )}
          />
        </Link>
        <div className="flex items-center gap-x-8">
          <Button href={ABSOLUTE_ROUTES.CONTACT_US} invert={invert}>
            Book Appointment
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10'
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700'
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

const NavigationRow: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

const NavigationItem: FC<
  PropsWithChildren & {
    href: string
  }
> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16"
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

const Navigation: FC = () => {
  return (
    <nav className="font-display mt-px text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href={ABSOLUTE_ROUTES.ABOUT}>About Me</NavigationItem>
        <NavigationItem href={ABSOLUTE_ROUTES.FAQS}>FAQs</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href={ABSOLUTE_ROUTES.CONTACT_US}>
          Contact us
        </NavigationItem>
        <NavigationItem href={ABSOLUTE_ROUTES.MEDIA_PUBLICATIONS}>
          Media Publications
        </NavigationItem>
      </NavigationRow>
    </nav>
  )
}

const RootLayoutInner: FC<PropsWithChildren> = ({ children }) => {
  const panelId = useId()
  const [expanded, setExpanded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const openRef = useRef<ComponentRef<'button'>>(null)
  const closeRef = useRef<ComponentRef<'button'>>(null)
  const navRef = useRef<ComponentRef<'div'>>(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const onClick = (event: MouseEvent): void => {
      if (
        event.target instanceof HTMLElement &&
        event.target.closest('a')?.href === window.location.href
      ) {
        setIsTransitioning(false)
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <MotionConfig
      transition={
        shouldReduceMotion === true || !isTransitioning
          ? { duration: 0 }
          : undefined
      }
    >
      <header>
        <div
          className="absolute top-2 right-0 left-0 z-40 pt-14"
          aria-hidden={expanded ? 'true' : undefined}
          // @ts-expect-error - (https://github.com/facebook/react/issues/17157)
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            icon={MenuIcon}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setIsTransitioning(true)
              setExpanded(exp => !exp)
              window.setTimeout(() =>
                closeRef.current?.focus({ preventScroll: true })
              )
            }}
          />
        </div>

        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : 'true'}
          inert={expanded ? undefined : false}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pt-14 pb-16">
              <Header
                invert
                panelId={panelId}
                icon={XIcon}
                toggleRef={closeRef}
                expanded={expanded}
                onToggle={() => {
                  setIsTransitioning(true)
                  setExpanded(exp => !exp)
                  window.setTimeout(() =>
                    openRef.current?.focus({ preventScroll: true })
                  )
                }}
              />
            </div>
            <Navigation />
            <div className="relative bg-neutral-950 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-neutral-800">
              <Container>
                <div className="grid grid-cols-1 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:pt-16">
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">
                      Follow us
                    </h2>
                    <SocialMedia className="mt-6" invert />
                  </div>
                </div>
              </Container>
            </div>
          </motion.div>
        </motion.div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-50 stroke-neutral-950/5"
            yOffset={-96}
            interactive
          />

          <main className="w-full flex-auto">{children}</main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname()

  return <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
}
