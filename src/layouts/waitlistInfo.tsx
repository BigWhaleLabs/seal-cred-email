import { HeaderText } from '../components/Text'
import { Mjml, Mjml2HtmlOptions, MjmlSpacer } from 'mjml-react'
import { render } from 'mjml-react'
import AnonymousHeader from '../components/AnonymousHeader'
import AttestationType from '../models/AttestationType'
import BodyCard from '../components/BodyCard'
import Footer from '../components/Footer'
import Head from '../components/Head'
import Header from '../components/Header'
import JumpWithTweet from '../components/Waitlist/JumpWithTweet'
import TryEmail from '../components/Waitlist/TryEmail'
import TwitterBlock from '../components/Waitlist/TwitterBlock'
import VerifyFasterContext from '../components/Waitlist/VerifyFasterContext'
import WaitlistHeader from '../components/Waitlist/WaitlistHeader'
import YcNft from '../components/Waitlist/YcNft'
import colors from '../styles/colors'
import values from '../styles/values'

interface WaitlistProps {
  attestationType: AttestationType
  anonCode: string
}

const headerText = (
  <>
    <HeaderText color={colors.primaryLight}>
      You’re on the waitlist for ketl
    </HeaderText>
    <AnonymousHeader />
  </>
)

const generateTokenPage = ({ anonCode, attestationType }: WaitlistProps) => {
  const isYc =
    attestationType === AttestationType.YC ||
    attestationType === AttestationType.TopYC

  return (
    <Mjml>
      <Head
        preview="You’re on the waitlist for ketl!"
        title="Prepare your cookies!"
      />
      <BodyCard>
        <Header headerText={headerText} />

        <WaitlistHeader />
        <MjmlSpacer height={values.px32} />

        <TwitterBlock attestationType={attestationType} />
        <MjmlSpacer height={values.px16} />
        <TryEmail attestationType={attestationType} />
        <MjmlSpacer height={values.px16} />
        <JumpWithTweet anonCode={anonCode} />
        <MjmlSpacer height={values.px16} />
        <VerifyFasterContext attestationType={attestationType} />
        <MjmlSpacer height={values.px16} />
        {isYc && <YcNft />}

        <Footer />
      </BodyCard>
    </Mjml>
  )
}

export default function (
  props: WaitlistProps,
  options: Mjml2HtmlOptions = {
    minify: false,
    validationLevel: 'soft',
  }
) {
  return render(generateTokenPage(props), options)
}
