const ROOT = '/'

const HOME = ''

const ABOUT = 'about'

const FAQS = 'faqs'

const CONTACT_US = 'contact'

const MEDIA_PUBLICATIONS = 'blog'

export const ABSOLUTE_ROUTES = {
  HOME: `${ROOT}${HOME}`,
  ABOUT: `${ROOT}${ABOUT}`,
  FAQS: `${ROOT}${FAQS}`,
  CONTACT_US: `${ROOT}${CONTACT_US}`,
  MEDIA_PUBLICATIONS: `${ROOT}${MEDIA_PUBLICATIONS}`
} as const
