import { createTransport } from 'nodemailer'

import { serverEnv } from '@/env/server'
import { ContactSchema } from '@/schemas/contact-schema'

const transporter = createTransport({
  host: serverEnv.SMTP_HOST,
  port: serverEnv.SMTP_PORT,
  secure: serverEnv.SMTP_SSL,
  auth: {
    user: serverEnv.SMTP_USER,
    pass: serverEnv.SMTP_PASSWORD
  }
})

const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()

export const POST = async (request: Request): Promise<Response> => {
  try {
    const body = await request.json()

    const result = ContactSchema.safeParse(body)

    if (!result.success) {
      return new Response(
        JSON.stringify({
          error: 'Invalid request body',
          details: result.error.flatten()
        }),
        {
          headers: {
            'Content-Type': 'application/json'
          },
          status: 400
        }
      )
    }

    const address = `"Eric Laitman Therapy" <${serverEnv.SMTP_USER}>`
    const details = Object.entries(body)
      .map(([key, value]) => `${capitalize(key)}: ${value}`)
      .join('\n')

    await transporter.sendMail({
      from: address,
      sender: address,
      replyTo: address,
      to: serverEnv.SMTP_USER,
      subject: `New Contact Form Submission - Eric Laitman Therapy`,
      text: `Hi Eric,\n\nNew Form Submission Details:\n${details}`
    })

    return new Response(
      JSON.stringify({ message: 'Contact form submitted successfully' }),
      {
        headers: {
          'Content-Type': 'application/json'
        },
        status: 200
      }
    )
  } catch {
    return new Response(JSON.stringify({ message: 'Something went wrong!' }), {
      headers: {
        'Content-Type': 'application/json'
      },
      status: 500
    })
  }
}
