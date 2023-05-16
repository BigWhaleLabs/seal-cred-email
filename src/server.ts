import 'module-alias/register'
import 'source-map-support/register'

import * as express from 'express'
import generateKetlTokenHtml from './index'

const port = 3002
const app = express()

const exampleSecret =
  '461gh8891g98d891h901j98jtye810ejtej0/1yj98je1j8et9y1jyt90199fn2ny198yj1954818119fg1bd189811gd8118hg91d991ffdg1'

app.get('*', (_, res) => {
  const { html } = generateKetlTokenHtml({
    domain: 'bwl.gg',
    secret: exampleSecret,
  })
  res.send(html)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
