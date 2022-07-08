import {
  Mjml,
  Mjml2HtmlOptions,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlClass,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
  MjmlWrapper,
} from 'mjml-react'
import { render } from 'mjml-react'
import colors from '../styles/colors'
import env from '.././env'
import values from '../styles/values'

const css = `
  a {
    text-decoration: none;
    color: inherit;
  }

  .body {
    margin: 0;
    padding: 0 ${values.px16};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: conic-gradient(
        from 90deg at 0.96px 0.96px,
        ${colors.primaryDark} 90deg,
        ${colors.primary} 0
      )
      0 0/48px 48px;
  }

  .break-all {
    word-break: break-all;
  }

  .vertical-middle {
    vertical-align: middle;
  }
`

const assetsEndpoint = `${env.SEALCRED_ADDRESS}/img/email`

const generateTokenPage = ({ secret }: { secret: string }) => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Here's your token!</MjmlTitle>
        <MjmlPreview>Here's your token!</MjmlPreview>
        <MjmlFont
          name="Space Grotesk"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk"
        />
        <MjmlFont
          name="JetBrains Mono"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono"
        />
        <MjmlAttributes>
          <MjmlClass name="text-accent" color={colors.accent} />
          <MjmlClass name="text-secondary" color={colors.secondary} />
          <MjmlClass name="text-formal-accent" color={colors.formal} />
          <MjmlClass name="bg-secondary" backgroundColor={colors.secondary} />
          <MjmlClass
            name="bg-primary-dark"
            backgroundColor={colors.primaryDark}
          />
          <MjmlClass
            name="font-accent"
            fontFamily="Space Grotesk, sans-serif"
          />
          <MjmlClass
            name="font-primary"
            fontFamily="JetBrains Mono, sans-serif"
          />
          <MjmlAll padding="0" />
        </MjmlAttributes>
        <MjmlStyle inline>{css}</MjmlStyle>
      </MjmlHead>
      <MjmlBody cssClass="body" backgroundColor={colors.primaryDark}>
        <MjmlWrapper paddingLeft={values.px16} paddingRight={values.px16}>
          <MjmlSpacer height={values.px32} />
          {/* Header */}
          <MjmlSection>
            <MjmlColumn>
              <MjmlText
                fontSize={values.px18}
                mjClass="font-primary"
                align="left"
              >
                <a
                  style={{ textDecoration: 'none' }}
                  href={env.SEALCRED_ADDRESS}
                >
                  <img
                    width={values.px56}
                    src={`${assetsEndpoint}/sc_logo.png`}
                    className="vertical-middle"
                  />
                  <span
                    style={{ color: colors.accent, paddingLeft: values.px10 }}
                  >
                    SealCred
                  </span>
                  <span
                    style={{
                      color: colors.secondary,
                      paddingLeft: values.px10,
                      paddingRight: values.px10,
                    }}
                  >
                    |
                  </span>
                  <span style={{ color: colors.secondary }}>work</span>
                </a>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSpacer height={values.px32} />

          {/* Token card */}

          <MjmlSection
            mjClass="bg-secondary"
            padding={values.px}
            borderRadius={values.px16}
          >
            <MjmlColumn
              mjClass="bg-primary-dark"
              padding={values.px16}
              borderRadius={values.px16}
            >
              <MjmlSpacer height={values.px20} />
              <MjmlText
                mjClass="font-accent text-formal-accent"
                fontSize={values.px20}
                fontWeight={700}
              >
                Your token is:
              </MjmlText>
              <MjmlSpacer height={values.px16} />
              <MjmlText
                mjClass="font-accent text-secondary"
                fontSize={values.px16}
                fontWeight={700}
              >
                <span className="break-all">{secret}</span>
              </MjmlText>
              <MjmlSpacer height={values.px20} />
            </MjmlColumn>
          </MjmlSection>

          <MjmlSpacer height={values.px32} />

          {/* Footer */}

          <MjmlSection
            paddingLeft={values.px8}
            paddingRight={values.px8}
            fullWidth
          >
            <MjmlColumn>
              <MjmlText
                fontSize={values.px16}
                color={colors.formal}
                mjClass="font-primary"
                align="center"
              >
                <a
                  href="https://sealcred.xyz/"
                  style={{ paddingLeft: values.px14 }}
                >
                  SealCred
                </a>
                <a
                  href="https://blog.bigwhalelabs.com/"
                  style={{ paddingLeft: values.px40 }}
                >
                  Blog
                </a>
                <a
                  href="https://twitter.com/bigwhalelabs"
                  style={{
                    paddingRight: values.px20,
                    paddingLeft: values.px40,
                  }}
                >
                  <img
                    width={values.px24}
                    className="vertical-middle"
                    src={`${assetsEndpoint}/twitter.png`}
                  />
                </a>
                <a href="https://discord.com/invite/NHk96pPZUV">
                  <img
                    src={`${assetsEndpoint}/discord_button.png`}
                    className="vertical-middle"
                  />
                </a>
              </MjmlText>

              <MjmlImage width="300px" src={`${assetsEndpoint}/bwl_logo.png`} />

              <MjmlSpacer height={values.px32} />
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  )
}

export const generateTokenHtml = (
  { secret }: { secret: string },
  options = {
    validationLevel: 'soft',
    minify: false,
  } as Mjml2HtmlOptions
) => render(generateTokenPage({ secret }), options)
