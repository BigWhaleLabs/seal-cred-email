import { BodyText, HeaderText } from '../Text'
import { MjmlSpacer } from 'mjml-react'
import { ketlWaitlist } from '../../data'
import Button from '../Button'
import Card from '../Card'
import colors from '../../styles/colors'
import values from '../../styles/values'

export default function ({ isYc }: { isYc: boolean }) {
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
      <Button href={ketlWaitlist}>Try an email</Button>
    </Card>
  )
}
