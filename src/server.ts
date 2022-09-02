import * as express from 'express'
import * as token from './templates/token'

const port = 3002
const app = express()

app.get('*', (req, res) => {
  const { html } = token.generateTokenHtml({
    secret: '906090',
    domain: 'apple.com',
  })
  res.send(html)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
