import { AttestationTypeWithNullProp } from '@/models/AttestationType'
import { BodyText, HeaderText } from '../Text'
import { MjmlSpacer } from 'mjml-react'
import { ketlWaitlistLink } from '../../data'
import Button from '../Button'
import Card from '../Card'
import colors from '../../styles/colors'
import values from '../../styles/values'

interface VerifyFasterProps extends AttestationTypeWithNullProp {
  isYc: boolean
}

export default function ({ attestationType, isYc }: VerifyFasterProps) {
  return (
    <Card>
      <HeaderText>Help us verify you faster</HeaderText>
      <MjmlSpacer height={values.px16} />
      <BodyText center color={colors.tertiary}>
        {isYc
          ? 'Tell us more about what YC batch you were in, your bookface id, or about your startup; our goal is to verify that you’re an actual YC founder and your startup is legit.'
          : "Tell us more about your startup or VC fund; our goal is to verify that your startup is legit and that you're you."}
      </BodyText>
      <MjmlSpacer height={values.px16} />
      <Button
        href={ketlWaitlistLink({ attestationType, waitlistContext: true })}
      >
        Provide context
      </Button>
    </Card>
  )
}
