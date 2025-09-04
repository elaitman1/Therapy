import type { Metadata } from 'next'
import type { FC, PropsWithChildren } from 'react'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

const Section: FC<
  PropsWithChildren<{
    title: string
  }>
> = ({ title, children }) => {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="mt-12 lg:mt-0 lg:w-full lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

const questions = [
  {
    question: 'What can I expect during my first therapy session?',
    answer:
      "Your first session will involve an initial assessment where we get to know you, your goals, and the challenges you're facing. It's a chance for you to ask questions and understand how our approach can best support you."
  },
  {
    question: 'How long does each therapy session last?',
    answer:
      "Each session typically lasts 50-60 minutes, though the duration may vary depending on your needs and the type of therapy you're receiving."
  },
  {
    question: 'How do I know if therapy is right for me?',
    answer:
      "Therapy can be beneficial for anyone looking to improve their mental health, work through personal challenges, or gain better self-awareness. If you're unsure, we recommend scheduling a consultation to discuss your goals and concerns."
  }
]

const Question: FC<{ question: string; answer: string }> = ({
  question,
  answer
}) => {
  return (
    <Section title={question}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>{answer}</p>
      </div>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'FAQs',
  description:
    'Frequently Asked Questions about our therapy services, including what to expect during your first session, session duration, and how to know if therapy is right for you.'
}

const FAQs: FC = () => {
  return (
    <RootLayout>
      <PageIntro eyebrow="FAQs" title="Frequently Asked Questions">
        <p>
          Find answers to some of the most common questions we receive regarding
          our process, services, and how we can help you achieve your goals.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {questions.map((question, i) => (
          <Question
            key={i}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>

      <ContactSection />
    </RootLayout>
  )
}

export default FAQs
