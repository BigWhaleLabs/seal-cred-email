import { HeaderText } from '../Text'
import { MjmlSpacer, MjmlText } from 'mjml-react'
import AttestationType from '../../models/AttestationType'
import Button from '../Button'
import Card from '../Card'
import VerificationType from '../../models/VerificationType'
import colors from '../../styles/colors'
import openKetl from '../../helpers/openKetlWaitlist'
import values from '../../styles/values'

export default function TwitterInviteCard({
  attestationType,
  twitterHandle,
}: {
  attestationType: AttestationType
  twitterHandle: string
}) {
  const ketlAppTwitterVerification = openKetl({
    attestationType,
    passed: true,
    value: twitterHandle,
    verificationType: VerificationType.twitter,
  })

  return (
    <Card>
      <HeaderText>
        Activate your ketl account using the X (twitter) account you used to
        sign up
      </HeaderText>

      <MjmlSpacer height={values.px16} />

      <Button href={ketlAppTwitterVerification}>Activate account</Button>

      <MjmlSpacer height={values.px16} />

      <MjmlText
        align="center"
        color={colors.tertiaryDark}
        fontSize={values.px16}
        lineHeight={values.px18}
        mjClass="font-primary"
      >
        You’re ready to begin with X account @{twitterHandle}
      </MjmlText>
    </Card>
  )
}
