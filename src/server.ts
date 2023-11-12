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

const exampleInviteCode =
  '0000000000000000000000000000000000000000000000000000000000000000000000000000:0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
const attestationType = AttestationType.Founder
const verificationType = VerificationType.email
const ketlXyzTwitter = { id: '1435733105554321409', username: 'ketlxyz' }
const exampleId = 'Qtqf3G35dpfXtoqCvQ45DphEmEco5sKc'

app.get('/waitlist', (_, res) => {
  const { html } = waitlistInfo({
    anonCode: 'btDa1',
    attestationType,
    verificationType,
  })

  void sendTestEmail({ html })

  res.send(html)
})

app.get('*', (_, res) => {
  const emailExample = inviteCode({
    attestationType,
    id: exampleId,
    inviteCode: exampleInviteCode,
    passedWaitlist: true,
    twitterMetadata: ketlXyzTwitter,
    value: env.TEST_EMAIL,
  })
  const { html } = emailExample

  void sendTestEmail({ html })

  res.send(html)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
