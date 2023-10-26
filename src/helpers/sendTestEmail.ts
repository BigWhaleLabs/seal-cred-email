import * as mg from 'nodemailer-mailgun-transport'
import { createTransport } from 'nodemailer'
import env from '../env'

export default async function ({
  html,
  to = env.TEST_EMAIL,
}: {
  html: string
  to?: string
}) {
  if (!env.MAILGUN_API_KEY || !env.MAILGUN_DOMAIN) {
    console.log('In order to test your email, update your .env')
    return
  }

  const emailerMailgun = createTransport(
    mg({
      auth: {
        api_key: env.MAILGUN_API_KEY,
        domain: env.MAILGUN_DOMAIN,
      },
    })
  )

  try {
    const from = 'Ketl'
    const fromEmail = 'ketl@mail.useketl.com'
    const replyTo = 'hi@ketl.xyz'
    console.log(`Sending email to ${to}`)

    await emailerMailgun.sendMail({
      from: `"${from}" <${fromEmail}>`,
      html,
      replyTo,
      subject: 'Test email',
      to,
    })

    console.log(`Email sent to ${to}`)
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
  }
}
