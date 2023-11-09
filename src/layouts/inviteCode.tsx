import { HeaderText } from '../components/Text'
import {
  Mjml,
  Mjml2HtmlOptions,
  MjmlDivider,
  MjmlSection,
  MjmlSpacer,
} from 'mjml-react'
import { render } from 'mjml-react'
import AnonymousHeader from '../components/AnonymousHeader'
import AttestationType from '../models/AttestationType'
import BodyCard from '../components/BodyCard'
import CanTrustCodes from '../components/InviteCode/CanTrustCodes'
import EmailInviteCard from '../components/InviteCode/EmailInviteCard'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Header'
import HowEmailsVerified from '../components/InviteCode/HowEmailsVerified'
import TwitterInviteCard from '../components/InviteCode/TwitterInviteCard'
import VerificationType from '../models/VerificationType'
import colors from '../styles/colors'
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
          <HowEmailsVerified attestationType={props.attestationType} />
          <MjmlSpacer height={values.px16} />

          <MjmlDivider borderColor={colors.tertiary} borderWidth={values.px} />

          <MjmlSpacer height={values.px16} />

          <CanTrustCodes />

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
