import { MjmlBody, MjmlSection, MjmlSpacer } from 'mjml-react'
import { PropsWithChildren } from 'react'
import colors from '../styles/colors'
import values from '../styles/values'

export default function ({ children }: PropsWithChildren) {
  return (
    <MjmlBody backgroundColor={colors.tertiary}>
      <MjmlSpacer height={values.px32} />
      <MjmlSection
        backgroundColor={colors.primaryBackground}
        borderRadius={values.px18}
        cssClass="main shadow-sm"
        padding={values.px32}
      >
        {children}
      </MjmlSection>
      <MjmlSpacer height={values.px32} />
    </MjmlBody>
  )
}
