import { BodyText, HeaderText } from '../Text'
import { MjmlSpacer } from 'mjml-react'
import Button from '../Button'
import Card from '../Card'
import colors from '../../styles/colors'
import openKetl, { WaitlistProps } from '../../helpers/openKetlWaitlist'
import values from '../../styles/values'

type VerifyFasterProps = WaitlistProps & { isYc: boolean }

export default function (props: VerifyFasterProps) {
  return (
    <Card>
      <HeaderText>Help us verify you faster</HeaderText>
      <MjmlSpacer height={values.px16} />
      <BodyText center color={colors.tertiary}>
        {props.isYc
          ? 'Tell us more about what YC batch you were in, your bookface id, or about your startup; our goal is to verify that you’re an actual YC founder and your startup is legit.'
          : "Tell us more about your startup or VC fund; our goal is to verify that your startup is legit and that you're you."}
      </BodyText>
      <MjmlSpacer height={values.px16} />
      <Button href={openKetl(props)}>Provide context</Button>
    </Card>
  )
}
