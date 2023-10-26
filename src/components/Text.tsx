import { MjmlText } from 'mjml-react'
import { PropsWithChildren } from 'react'
import colors, { AvailableColors } from '../styles/colors'
import values, { AvailableValues } from '../styles/values'

export const gmailLinkStyles = {
  color: colors.formal,
  textDecoration: 'none',
}

interface BodyTextProps extends PropsWithChildren {
  color?: AvailableColors
  fontAccent?: boolean
  size?: AvailableValues
  lineHeight?: AvailableValues
  center?: boolean
}

export function BodyText({
  center,
  children,
  color = colors.primaryLight,
  fontAccent,
  lineHeight = values.px16,
  size = values.px14,
}: BodyTextProps) {
  return (
    <MjmlText
      align={center ? 'center' : 'left'}
      color={color}
      fontSize={size}
      lineHeight={lineHeight}
      mjClass={fontAccent ? 'font-accent' : 'font-primary'}
    >
      {children}
    </MjmlText>
  )
}

export function HeaderText({
  children,
  color = colors.tertiaryDark,
}: PropsWithChildren & { color?: AvailableColors }) {
  return (
    <MjmlText
      align="center"
      color={color}
      fontSize={values.px24}
      fontWeight={700}
      lineHeight={values.px27}
      mjClass="font-accent"
    >
      {children}
    </MjmlText>
  )
}
