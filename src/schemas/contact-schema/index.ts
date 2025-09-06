import { z } from 'zod'

export const ContactSchemaKeys = {
  NAME: 'name',
  EMAIL: 'email',
  COMPANY: 'company',
  PHONE: 'phone',
  MESSAGE: 'message'
} as const

const NameSchema = z.string()

const EmailSchema = z.email()

const CompanySchema = z.string().optional()

const PhoneSchema = z.string().optional()

const MessageSchema = z.string()

export const ContactSchema = z.object({
  [ContactSchemaKeys.NAME]: NameSchema,
  [ContactSchemaKeys.EMAIL]: EmailSchema,
  [ContactSchemaKeys.COMPANY]: CompanySchema,
  [ContactSchemaKeys.PHONE]: PhoneSchema,
  [ContactSchemaKeys.MESSAGE]: MessageSchema
})

export type ContactSchemaType = z.infer<typeof ContactSchema>
