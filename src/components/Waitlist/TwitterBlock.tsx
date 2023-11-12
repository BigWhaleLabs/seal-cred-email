import { BodyText, HeaderText } from '../Text'
import { MjmlSpacer } from 'mjml-react'
import Button from '../Button'
import Card from '../Card'
import colors from '../../styles/colors'
import openKetl, { WaitlistProps } from '../../helpers/openKetlWaitlist'
import values from '../../styles/values'

export default function (props: WaitlistProps) {
  return (
    <Card>
      <HeaderText>Try Verifying with X (Twitter) if you haven’t</HeaderText>
      <MjmlSpacer height={values.px16} />
      <BodyText center color={colors.tertiary}>
        Go into the app and try verifying with your twitter account
      </BodyText>
      <MjmlSpacer height={values.px16} />
      <Button href={openKetl(props)}>Verify with X</Button>
    </Card>
  )
}
