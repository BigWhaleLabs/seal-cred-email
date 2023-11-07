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
import AttestationType from '@/models/AttestationType'
import BodyCard from '../components/BodyCard'
import EmailInviteCard from '@/components/InviteCode/EmailInviteCard'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Header'
import TwitterInviteCard from '@/components/InviteCode/TwitterInviteCard'
import VerificationType from '@/models/VerificationType'
import colors from '../styles/colors'
import makeLink from '../helpers/makeLink'
import values from '../styles/values'

type TokenProps<Verification extends VerificationType> =
  Verification extends VerificationType.email
    ? {
        attestationType: AttestationType
        secret: string
        email: string
      }
    : {
        attestationType: AttestationType
        twitterHandle: string
      }

const headerText = (
  <>
    <HeaderText color={colors.primaryLight}>Welcome to ketl</HeaderText>
    <AnonymousHeader />
  </>
)

function generateTokenPage<Verification extends VerificationType>(
  props: TokenProps<Verification>
) {
  const usedTwitter = 'twitterHandle' in props

  return (
    <Mjml>
      <Head
        preview="Can't wait to chat with you!"
        title="Here's your invite code!"
      />
      <BodyCard>
        <Header headerText={headerText} />

        {usedTwitter ? (
          <TwitterInviteCard {...props} />
        ) : (
          <EmailInviteCard {...props} />
        )}

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

export default function <Verification extends VerificationType>(
  props: TokenProps<Verification>,
  options: Mjml2HtmlOptions = {
    minify: false,
    validationLevel: 'soft',
  }
) {
  return render(generateTokenPage(props), options)
}
