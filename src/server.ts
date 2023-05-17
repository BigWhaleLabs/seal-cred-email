import 'module-alias/register'
import 'source-map-support/register'

import * as express from 'express'
import generateKetlTokenHtml from './index'

const port = 3002
const app = express()

const exampleSecret =
  '0000000000000000000000000000000000000000000000000000000000000000000000000000:0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'

app.get('*', (_, res) => {
  const { html } = generateKetlTokenHtml({
    domain: 'bwl.gg',
    secret: exampleSecret,
  })
  res.send(html)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
