import 'module-alias/register'
import 'source-map-support/register'

import * as express from 'express'
import { inviteCode, waitlistInfo } from './index'
import AttestationType from './models/AttestationType'
import VerificationType from './models/VerificationType'
import sendTestEmail from './helpers/sendTestEmail'

const port = 3002
const app = express()

const exampleSecret =
  '0000000000000000000000000000000000000000000000000000000000000000000000000000:0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
const exampleEmail = 'testEmail@ketl.cloud'

app.get('/waitlist', (_, res) => {
  const { html } = waitlistInfo({
    anonCode: 'BT-7274',
    attestationType: AttestationType.VC,
  })

  void sendTestEmail({ html })

  res.send(html)
})

app.get('*', (_, res) => {
  const { html } = inviteCode<VerificationType.twitter>({
    attestationType: AttestationType.YC,
    twitterHandle: 'ketlxyz',
  })

  void sendTestEmail({ html })

  res.send(html)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
