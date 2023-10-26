import { MjmlButton } from 'mjml-react'
import { PropsWithChildren } from 'react'
import colors from '../styles/colors'
import values from '../styles/values'

interface ButtonProps extends PropsWithChildren {
  href: string
}

export default function ({ children, href }: ButtonProps) {
  return (
    <MjmlButton
      backgroundColor={colors.secondaryDark}
      borderRadius={values.px40}
      color={colors.formal}
      cssClass="emptyLink"
      fontSize={18}
      fontWeight={700}
      href={href}
      innerPadding="16px 20px"
      mjClass="font-accent"
      textDecoration="none"
    >
      <span style={{ color: colors.formal }}>{children}</span>
    </MjmlButton>
  )
}
