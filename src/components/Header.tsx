import { MjmlDivider, MjmlSection, MjmlSpacer, MjmlText } from 'mjml-react'
import { ketlLogo, ketlLogoAnimated } from '../assets'
import colors from '../styles/colors'
import env from '../env'
import values from '../styles/values'

export default function ({ headerText }: { headerText: JSX.Element }) {
  return (
    <>
      <MjmlSpacer height={values.px32} />
      <MjmlSection>
        <MjmlText align="center">
          <a href={env.KETL_ADDRESS}>
            {/* it loads static logo first, then gif */}
            <img
              alt="logo"
              src={ketlLogoAnimated}
              width={values.px90}
              style={{
                background: `url(${ketlLogo}) no-repeat`,
              }}
            />
          </a>
        </MjmlText>
        <MjmlSpacer height={values.px32} />
        {headerText}
      </MjmlSection>

      <MjmlSpacer height={values.px32} />
      <MjmlDivider borderColor={colors.primary} borderWidth={values.px} />
      <MjmlSpacer height={values.px32} />
    </>
  )
}
