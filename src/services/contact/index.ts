import type { ContactSchemaType } from '@/schemas/contact-schema'

export const submitContactForm = async (
  data: ContactSchemaType
): Promise<void> => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }
}
