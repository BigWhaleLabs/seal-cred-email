import { MjmlText } from 'mjml-react'
import colors from '../styles/colors'
import values from '../styles/values'

export default function () {
  return (
    <MjmlText
      align="center"
      color={colors.primaryLight}
      fontSize={values.px24}
      fontWeight={700}
      lineHeight={values.px27}
      mjClass="font-accent"
    >
      An anonymous app for{' '}
      <span style={{ color: colors.alternative }}>Founders</span> and{' '}
      <span style={{ color: colors.alternative }}>VCs</span>
    </MjmlText>
  )
}
