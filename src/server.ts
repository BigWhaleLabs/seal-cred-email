import 'module-alias/register'
import 'source-map-support/register'

import * as express from 'express'
import { inviteCode, waitlistInfo } from './index'
import AttestationType from './models/AttestationType'
import sendTestEmail from './helpers/sendTestEmail'

const port = 3002
const app = express()

const exampleSecret =
  '0000000000000000000000000000000000000000000000000000000000000000000000000000:0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
const exampleDomain = 'bwl.gg'

app.get('/waitlist', (_, res) => {
  const { html } = waitlistInfo({
    anonCode: 'BT-7274',
    attestationType: AttestationType.YC,
  })

  void sendTestEmail({ html })

  res.send(html)
})

app.get('*', (_, res) => {
  const { html } = inviteCode({
    domain: exampleDomain,
    secret: exampleSecret,
  })

  void sendTestEmail({ html })

  res.send(html)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
