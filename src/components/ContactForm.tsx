'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  type ComponentPropsWithoutRef,
  type FC,
  useCallback,
  useId
} from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import {
  ContactSchema,
  ContactSchemaKeys,
  type ContactSchemaType
} from '@/schemas/contact-schema'
import { submitContactForm } from '@/services/contact'

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

export const ContactForm: FC = () => {
  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(ContactSchema)
  })

  const onSubmit: SubmitHandler<ContactSchemaType> = useCallback(
    async data => {
      try {
        await submitContactForm(data)

        toast.success('Message sent successfully!')
        form.reset()
      } catch {
        toast.error('Something went wrong. Please try again.')
      }
    },
    [form]
  )

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Fill out the form below
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            autoComplete="name"
            {...form.register(ContactSchemaKeys.NAME)}
          />
          <TextInput
            label="Email"
            type="email"
            autoComplete="email"
            {...form.register(ContactSchemaKeys.EMAIL)}
          />
          <TextInput
            label="Phone"
            type="tel"
            autoComplete="tel"
            {...form.register(ContactSchemaKeys.PHONE)}
          ></TextInput>
          <TextInput
            label="Message"
            {...form.register(ContactSchemaKeys.MESSAGE)}
          />
        </div>
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="mt-10 cursor-pointer"
        >
          {form.formState.isSubmitting ? 'Sending...' : 'Send message'}
        </Button>
      </form>
    </FadeIn>
  )
}
