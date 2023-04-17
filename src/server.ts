import 'module-alias/register'
import 'source-map-support/register'

import * as express from 'express'
import generateTokenHtml from '@/templates/token'

const port = 3002
const app = express()

app.get('*', (_, res) => {
  const { html } = generateTokenHtml({
    domain: 'bwl.gg',
    secret: '906090',
  })
  res.send(html)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
