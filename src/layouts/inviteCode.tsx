import { BodyText, HeaderText } from '../components/Text'
import {
  Mjml,
  Mjml2HtmlOptions,
  MjmlDivider,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from 'mjml-react'
import { render } from 'mjml-react'
import { ycLink } from '../data'
import AnonymousHeader from '../components/AnonymousHeader'
import BodyCard from '../components/BodyCard'
import Button from '../components/Button'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Header'
import colors from '../styles/colors'
import env from '../env'
import makeLink from '../helpers/makeLink'
import values from '../styles/values'

interface TokenProps {
  secret: string
  domain: string
}

const headerText = (
  <>
    <HeaderText color={colors.primaryLight}>Welcome to ketl</HeaderText>
    <AnonymousHeader />
  </>
)

const generateTokenPage = ({ domain, secret }: TokenProps) => {
  const linkToKetlEmailVerification = `${env.KETL_ADDRESS}/email/${domain}/${secret}`

  return (
    <Mjml>
      <Head
        preview="Can't wait to chat with you!"
        title="Here's your invite code!"
      />
      <BodyCard>
        <Header headerText={headerText} />

        <Card>
          <HeaderText>Your secure ketl invite code:</HeaderText>

          <MjmlSpacer height={values.px16} />

          <Button href={linkToKetlEmailVerification}>Activate account</Button>

          <MjmlSpacer height={values.px16} />

          {/* invite code */}
          <MjmlText
            fontSize={values.px16}
            fontWeight={400}
            lineHeight={values.px18}
            mjClass="font-accent text-tertiary-dark"
          >
            <span style={{ wordBreak: 'break-all' }}>{secret}</span>
          </MjmlText>

          <MjmlSpacer height={values.px24} />

          <MjmlText
            align="center"
            color={colors.tertiary}
            fontSize={values.px16}
            lineHeight={values.px18}
            mjClass="font-primary"
          >
            Or copy and paste it into ketl
          </MjmlText>
          <MjmlSpacer height={values.px2} />
          <MjmlText
            align="center"
            color={colors.accentAlternative}
            fontSize={values.px12}
            lineHeight={values.px18}
            mjClass="font-primary"
          >
            (<strong>DO NOT</strong> Screenshot or share your invite code with
            anyone else)
          </MjmlText>
        </Card>

        <MjmlSpacer height={values.px32} />

        {/* Info text */}
        <MjmlSection>
          <MjmlText
            align="left"
            color={colors.alternative}
            fontSize={values.px14}
            lineHeight={values.px16}
            mjClass="font-primary"
          >
            How are emails verified?
          </MjmlText>
          <MjmlSpacer height={values.px16} />
          <BodyText>
            For YC founders, we reference the public founder database published
            by YC on: {makeLink(ycLink, 'ycombinator.com/companies/founders')}{' '}
            to generate an anonymity set of founders for the YC credential.
            <p></p>
            For other founders/VCs we curate an allowlist of founder/vc emails.
            <p></p>
            Ultimately, anyone can ask us to send an email to any address in the
            allowlist.<p></p>
            However, only those who own one of the email addresses in the
            allowlist possess a valid token. Since we never find out which exact
            token you own, there is no way for us to find out the email
            address/real-world identity associated with any ketl user.
          </BodyText>

          <MjmlSpacer height={values.px16} />
          <MjmlDivider borderColor={colors.tertiary} borderWidth={values.px} />
          <MjmlSpacer height={values.px16} />

          <BodyText color={colors.alternative}>
            Can I trust ketl invite codes?
          </BodyText>
          <MjmlSpacer height={values.px16} />
          <BodyText>
            When you enter your invite code, we don't receive it directly.
            Instead, we get a secure proof called a zero-knowledge proof, which
            confirms that you have a valid invite code from an approved set, but
            without revealing the specific invite code you hold. This process
            ensures your privacy, as we can't link your email address to your
            ketl account. This ensures a safe and anonymous experience on the
            app.
          </BodyText>

          <MjmlSpacer height={values.px16} />
          <MjmlDivider borderColor={colors.tertiary} borderWidth={values.px} />
        </MjmlSection>

        <Footer />
      </BodyCard>
    </Mjml>
  )
}

export default function (
  { domain, secret }: TokenProps,
  options: Mjml2HtmlOptions = {
    minify: false,
    validationLevel: 'soft',
  }
) {
  return render(generateTokenPage({ domain, secret }), options)
}
