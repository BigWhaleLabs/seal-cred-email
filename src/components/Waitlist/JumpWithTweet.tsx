import { BodyText, HeaderText } from '../Text'
import { MjmlSpacer } from 'mjml-react'
import Button from '../Button'
import Card from '../Card'
import colors from '../../styles/colors'
import tweetAnonCode from '../../helpers/tweetAnonCode'
import values from '../../styles/values'

export default function ({ anonCode }: { anonCode: string }) {
  return (
    <Card>
      <HeaderText>Jump ahead with a Tweet</HeaderText>
      <MjmlSpacer height={values.px16} />
      <BodyText center color={colors.tertiary}>
        Tag us (@ketl) and include your anonymous waitlist code, and we’ll
        verify you ASAP
      </BodyText>
      <MjmlSpacer height={values.px16} />
      <BodyText center color={colors.tertiaryDark}>
        Anonymous waitlist code: {anonCode}
      </BodyText>
      <MjmlSpacer height={values.px16} />
      <Button href={tweetAnonCode(anonCode)}>Tweet now</Button>
    </Card>
  )
}
