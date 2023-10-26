import { MjmlColumn, MjmlSection } from 'mjml-react'
import { PropsWithChildren } from 'react'
import values from '../styles/values'

export default function ({ children }: PropsWithChildren) {
  return (
    <MjmlSection
      borderRadius={values.px18}
      cssClass="shadow-sm"
      mjClass="bg-tertiary"
      padding={values.px2}
    >
      <MjmlColumn
        borderRadius={values.px16}
        mjClass="bg-primary-light"
        padding={values.px24}
      >
        {children}
      </MjmlColumn>
    </MjmlSection>
  )
}
