import { BodyText, HeaderText } from '../Text'
import { MjmlSpacer } from 'mjml-react'
import { ketlWaitlistLink } from '../../data'
import AttestationType, {
  AttestationTypeWithNullProp,
} from '@/models/AttestationType'
import Button from '../Button'
import Card from '../Card'
import colors from '../../styles/colors'
import values from '../../styles/values'

export default function ({ attestationType }: AttestationTypeWithNullProp) {
  const isYc =
    attestationType === AttestationType.YC ||
    attestationType === AttestationType.TopYC

  return (
    <Card>
      <HeaderText>
        {isYc ? 'Verify your founders@ email' : 'Try another email'}
      </HeaderText>
      <MjmlSpacer height={values.px16} />
      <BodyText center color={colors.tertiary}>
        {isYc
          ? 'Don’t have access to your founders@ email anymore? Try entering your work email above instead. It may be on the allowlist'
          : 'Go into the app and try verifying with another email you think might be on our allowlist'}
      </BodyText>
      <MjmlSpacer height={values.px16} />
      <Button href={ketlWaitlistLink({ attestationType })}>Try an email</Button>
    </Card>
  )
}
