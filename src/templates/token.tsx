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
} from 'mjml-react'
import { render } from 'mjml-react'
import colors from '../styles/colors'
import env from '.././env'
import values from '../styles/values'

const css = `
  .body {
    margin: 0;
    padding: 0 ${values.px20};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: conic-gradient(
        from 90deg at 0.96px 0.96px,
        ${colors.primaryDark} 90deg,
        ${colors.primary} 0
      )
      0 0/48px 48px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .vertical-middle {
    vertical-align: middle;
  }
}
`

const assetsEndpoint = `${env.sealCredAddress}/img/email`

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
          <MjmlClass name="hidden" display="hidden" opacity="0" />
          <MjmlAll padding="0" />
        </MjmlAttributes>
        <MjmlStyle inline>{css}</MjmlStyle>
      </MjmlHead>
      <MjmlBody cssClass="body" backgroundColor={colors.primaryDark}>
        <MjmlSpacer height={values.px32} />
        {/* Header */}
        <MjmlSection>
          <MjmlColumn>
            <MjmlText
              fontSize={values.px18}
              mjClass="font-primary"
              align="left"
            >
              <a style={{ textDecoration: 'none' }} href={env.sealCredAddress}>
                <img
                  width={values.px56}
                  className="vertical-middle"
                  src={`${assetsEndpoint}/sc_logo.png`}
                />
                <span
                  style={{ color: colors.accent, paddingLeft: values.px16 }}
                >
                  SealCred
                </span>
                <span
                  style={{
                    color: colors.secondary,
                    paddingLeft: values.px4,
                    paddingRight: values.px4,
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
              {secret}
            </MjmlText>
            <MjmlSpacer height={values.px20} />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSpacer height={values.px64} />

        {/* Footer */}

        <MjmlSpacer height={values.px56} />

        <MjmlSection>
          <MjmlColumn>
            <MjmlText
              fontSize={values.px16}
              color={colors.formal}
              mjClass="font-primary"
              align="center"
            >
              <a href="https://sealcred.xyz/">SealCred</a>
            </MjmlText>
            <MjmlSpacer height={values.px40} />
            <MjmlText
              fontSize={values.px16}
              color={colors.formal}
              mjClass="font-primary"
              align="center"
            >
              <a href="https://blog.bigwhalelabs.com/">Blog</a>
            </MjmlText>
            <MjmlSpacer height={values.px40} />
            <MjmlText
              fontSize={values.px16}
              color={colors.formal}
              mjClass="font-primary"
              align="center"
            >
              <a href="https://twitter.com/bigwhalelabs">
                <img
                  width={values.px24}
                  className="vertical-middle"
                  src={`${assetsEndpoint}/twitter.png`}
                />
              </a>
            </MjmlText>
            <MjmlText
              fontSize={values.px16}
              color={colors.formal}
              mjClass="font-primary"
              align="center"
            >
              <a href="https://discord.com/invite/NHk96pPZUV">
                <img src={`${assetsEndpoint}/discord_button.png`} />
              </a>
            </MjmlText>
            <MjmlImage width="300px" src={`${assetsEndpoint}/bwl_logo.png`} />

            <MjmlSpacer height={values.px32} />

            {/* Prevents gmail trimming same emails */}
            <MjmlText
              fontSize={values.px16}
              color={colors.formal}
              mjClass="font-primary hidden"
              align="center"
            >
              Email was sent at: {Date.now().toString()}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
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
