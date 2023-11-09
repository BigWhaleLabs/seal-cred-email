# SealCred email template

## Installation

`yarn add @big-whale-labs/ketl-email`

Add `.env` into project root if you need one:

### Environment variables

| Name                  | Description                                                                      |
| --------------------- | -------------------------------------------------------------------------------- |
| `ASSETS_ADDRESS`      | Address, where the assets (images) will be loaded from                           |
| `KETL_ADDRESS`        | Web-site address to create proper email-link in button                           |
| `MAILGUN_API_KEY`     | Used to send test emails                                                         |
| `MAILGUN_DOMAIN`      | Used to send test emails                                                         |
| `TEST_EMAIL`          | Used to send test emails, use the one you used in the app                        |
| `TEST_TWITTER_HANDLE` | Used to send test emails, shouldn't include `@`, use the one you used in the app |

## How to Use

```ts
import { createTransport } from 'nodemailer'
import { token } from '@big-whale-labs/ketl-email'
import env from '../helpers/env'

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
    from: `"Ketl" <${user}>`,
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
3. **In another project**. Run `yarn link @big-whale-labs/ketl-email`
4. Nice! Your project will now use the local version of `@big-whale-labs/ketl-email`

## Available scripts

- `yarn start` — runs email templates in the development mode
- `yarn build` — builds email templates for production to the `dist` folder
- `yarn release` — create a release and publish the package using `ci`
