const CONTENT = `
# Eric Laitman Therapy - Therapy for the Good, Bad, and Uncomfortable

Therapy should be a place where you can say the good, bad, and the uncomfortable - even about your therapist. No need to package things nicely. I’m all ears, judgment free to celebrate the gift of you.

## Contact Information

- [Contact – Elvoyr](https://ericlaitmantherapy.com/contact/): Reach out for support or inquiries regarding your custom designs.
`

export const GET = (): Response => {
  return new Response(CONTENT, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control':
        'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400'
    }
  })
}
