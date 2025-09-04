const CONTENT = `
# Eric Laitman Therapy - Therapy for the Good, Bad, and Uncomfortable

Therapy should be a place where you can say what’s on your mind without fear of judgment. During our sessions, you're in the driver's seat, and I'm right there beside you, your family and/or partner as we explore the twists and turns of your inner world(s). Along the way, I draw on what I call my 'superpowers' which are the combinations of my lived experience with OCD and ADHD which give me a unique ability to pick up on subtle patterns and details along with my trainings in psychoanalysis, CBT (ACT, ERP), somatic work, dissociation, etc. which enable me to step back and see the bigger picture as we get to the root of issues.

I've also lived a few lives before becoming a therapist. My background spans careers in banking & software,counseling in school systems in Compton,working community clinics,teaching yoga and supporting veterans through counseling. These experiences help me connect with clients who are navigating major life transitions,searching for a deeper sense of purpose.
Finally, I welcome feedback like “do more of this” or “less of that” because therapy isn’t like other relationships — you don’t need to worry about formalities or protecting my feelings. Together, we won’t just manage symptoms; we’ll work toward real, lasting change. Looking forward to working with you!

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
