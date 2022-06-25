# sc email templates

## Installation

`yarn add @big-whale-labs/sc-email` or `npm i @big-whale-labs/sc-email`

## How to Use

```ts
import { MailgunTemplate } from 'ts-mailgun/dist/mailgun-template'
import { NodeMailgun } from 'ts-mailgun'
import { login } from '@big-whale-labs/sc-email'

const mailer = new NodeMailgun()
mailer.apiKey = process.env.MAILGUN_KEY
mailer.domain = process.env.MAILGUN_DOMAIN
mailer.fromEmail = `sc@${mailer.domain}`
mailer.fromTitle = 'sc'
mailer.unsubscribeLink = false
mailer.init()

const template = new MailgunTemplate()
template.subject = 'sc login link'
template.body = login

const email = 'awesome@sc.io'
const variables = {}

mailer.sendFromTemplate(email, template, variables)
```

## Local launch

1. Install dependencies with `yarn`
2. Run the server with `yarn start`

## Development in conjunction with another project

1. Run `yarn link` in the root folder, [more about yarn link](https://classic.yarnpkg.com/en/docs/cli/link)
2. Run develop mode with `yarn start`
3. **In another project**. Run `yarn link @big-whale-labs/sc-email`
4. Nice! Your project will now use the local version of `@big-whale-labs/sc-email`

## Available Scripts

- `yarn start` — runs email templates in the development mode
- `yarn build` — builds email templates for production to the `dist` folder
- `yarn release` — create a release and publish the package using `ci`
