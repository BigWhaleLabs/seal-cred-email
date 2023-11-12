import { MjmlDivider, MjmlSpacer, MjmlText } from 'mjml-react'
import { openKetlWaitlistPassed } from '../../helpers/openKetlWaitlist'
import AttestationType from '../../models/AttestationType'
import colors from '../../styles/colors'
import values from '../../styles/values'

interface TwitterBlockProps {
  attestationType: AttestationType
  id: string
}

export default function TwitterBlock(params: TwitterBlockProps) {
  const ketlAppTwitterVerification = openKetlWaitlistPassed(params)

  return (
    <>
      <MjmlSpacer height={values.px24} />
      <MjmlDivider borderColor={colors.tertiary} borderWidth={values.px} />
      <MjmlSpacer height={values.px24} />
      <MjmlText
        align="center"
        color={colors.tertiary}
        fontSize={values.px14}
        lineHeight={values.px16}
        mjClass="font-primary"
      >
        You may also activate your ketl account using the X (twitter) account
        you used to sign up.
      </MjmlText>
      <MjmlSpacer height={values.px16} />
      <MjmlText
        align="center"
        color={colors.tertiaryDark}
        fontSize={values.px14}
        lineHeight={values.px16}
        mjClass="font-primary"
        textDecoration="underline"
      >
        <a href={ketlAppTwitterVerification} target="_blank">
          Activate with X instead
        </a>
      </MjmlText>
    </>
  )
}
