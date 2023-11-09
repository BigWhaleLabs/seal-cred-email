import 'module-alias/register'
import 'source-map-support/register'

import * as express from 'express'
import { inviteCode, waitlistInfo } from './index'
import AttestationType from './models/AttestationType'
import VerificationType from './models/VerificationType'
import env from './env'
import sendTestEmail from './helpers/sendTestEmail'

const port = 3002
const app = express()

const exampleSecret =
  '0000000000000000000000000000000000000000000000000000000000000000000000000000:0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
const attestationType = AttestationType.YC
const verificationType = VerificationType.twitter

app.get('/waitlist', (_, res) => {
  const { html } = waitlistInfo({
    anonCode: 'btDa1',
    attestationType,
    value: env.TEST_EMAIL,
    verificationType,
  })

  void sendTestEmail({ html })

  res.send(html)
})

app.get('*', (_, res) => {
  const emailExample = inviteCode({
    attestationType,
    email: env.TEST_EMAIL,
    secret: exampleSecret,
    twitterHandle: env.TEST_TWITTER_HANDLE,
  })
  const { html } = emailExample

  void sendTestEmail({ html })

  res.send(html)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
