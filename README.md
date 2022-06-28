# SealCred email template

## Installation

`yarn add @big-whale-labs/sc-email`

## How to Use

```ts
import { createTransport } from 'nodemailer'
import { token } from '@big-whale-labs/sc-email'
import env from '@/helpers/env'

const user = env.SMTP_USER
const pass = env.SMTP_PASS

const emailer = createTransport({
  host: 'box.mail.sealcred.xyz',
  port: 465,
  secure: true,
  auth: {
    user,
    pass,
  },
})

export default function (to: string, subject: string, text: string) {
  return emailer.sendMail({
    from: `"SealCred" <${user}>`,
    to,
    subject,
    html: token.replace('{{token}}', text),
  })
}
```

## Local launch

1. Install dependencies with `yarn`
2. Run the server with `yarn start`

## Development in conjunction with another project

1. Run `yarn link` in the root folder, [more about yarn link](https://classic.yarnpkg.com/en/docs/cli/link)
2. Run develop mode with `yarn start`
3. **In another project**. Run `yarn link @big-whale-labs/sc-email`
4. Nice! Your project will now use the local version of `@big-whale-labs/sc-email`

## Available scripts

- `yarn start` — runs email templates in the development mode
- `yarn build` — builds email templates for production to the `dist` folder
- `yarn release` — create a release and publish the package using `ci`
