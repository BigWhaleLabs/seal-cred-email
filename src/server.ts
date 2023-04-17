import * as express from 'express'
import * as token from 'src/templates/token'

const port = 3002
const app = express()

app.get('*', (req, res) => {
  const { html } = token.generateTokenHtml({
    domain: 'bwl.gg',
    secret: '906090',
  })
  res.send(html)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
