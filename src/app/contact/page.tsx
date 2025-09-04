import type { Metadata } from 'next'
import Link from 'next/link'
import { type ComponentPropsWithoutRef, type FC, useId } from 'react'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SocialMedia } from '@/components/SocialMedia'

const TextInput: FC<ComponentPropsWithoutRef<'input'> & { label: string }> = ({
  label,
  ...props
}) => {
  const id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

const ContactForm: FC = () => {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Fill out the form below
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
        </div>
        <Button type="submit" className="mt-10">
          Send message
        </Button>
      </form>
    </FadeIn>
  )
}

const ContactDetails: FC = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Email us
      </h2>
      <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
        {[
          ['Appointment', 'appointments@erictherapy.com'],
          ['Information', 'info@erictherapy.com']
        ].map(([label, email]) => (
          <div key={email}>
            <dt className="font-semibold text-neutral-950">{label}</dt>
            <dd>
              <Link
                href={`mailto:${email}`}
                className="text-neutral-600 hover:text-neutral-950"
              >
                {email}
              </Link>
            </dd>
          </div>
        ))}
      </dl>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.'
}

const Contact: FC = () => {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>
          Whether you’re looking to book a session, have a question, or just
          want to say hello, we’re here for you. Fill out the form below, and
          we’ll get back to you as soon as possible.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}

export default Contact
