import { AttestationTypeWithNullProp } from '@/models/AttestationType'
import { BodyText, HeaderText } from '../Text'
import { MjmlSpacer } from 'mjml-react'
import { ketlWaitlistLink } from '../../data'
import Button from '../Button'
import Card from '../Card'
import colors from '../../styles/colors'
import values from '../../styles/values'

export default function ({ attestationType }: AttestationTypeWithNullProp) {
  return (
    <Card>
      <HeaderText>Try Verifying with X (Twitter) if you haven’t</HeaderText>
      <MjmlSpacer height={values.px16} />
      <BodyText center color={colors.tertiary}>
        Go into the app and try verifying with your twitter account
      </BodyText>
      <MjmlSpacer height={values.px16} />
      <Button href={ketlWaitlistLink({ attestationType })}>
        Verify with X
      </Button>
    </Card>
  )
}