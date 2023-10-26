import { BodyText, HeaderText } from '../Text'
import { MjmlSpacer } from 'mjml-react'
import colors from '../../styles/colors'
import values from '../../styles/values'

export default function () {
  return (
    <>
      <HeaderText color={colors.primaryLight}>Skip the waitlist</HeaderText>
      <MjmlSpacer height={values.px8} />
      <BodyText center>
        Here are the steps to jump or possibly skip the waitlist on the app.
      </BodyText>
    </>
  )
}
