import * as express from 'express'
import { render } from 'mjml-react'

import * as token from './templates/token'

const port = 3000
const app = express()

app.get('*', (req, res) => {
  const { html } = render(token.generateTokenPage({ secret: '906090' }), {
    validationLevel: 'soft',
  })
  res.send(html)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
