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
  MjmlNavbar,
  MjmlNavbarLink,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
} from 'mjml-react'
import { breakpoints, values } from '../styles/values'
import { render } from 'mjml-react'
import colors from '../styles/colors'
import env from '.././env'

const css = `
  .body {
    margin: 0;
    padding: 0 ${values.px20};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.primaryDark};
    background: conic-gradient(
        from 90deg at 0.96px 0.96px,
        ${colors.primaryDark} 90deg,
        ${colors.primary} 0
      )
      0 0/48px 48px;
  }

  a:hover {
    color: ${colors.tertiary} !important;
  }

  .discord-button:hover {
    opacity: 0.7;
  }

  .process-desktop {
    display: block;
  }
  .process-mobile {
    display: none;
  }
  .mj-link {
    padding-top: 0 !important;
    display: table-cell !important;
    padding-left: ${values.px42} !important;
    vertical-align: middle;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    .body {
      background: conic-gradient(
          from 90deg at 0.96px 0.96px,
          #0d0030 90deg,
          #1a0259 0
        )
        0 0/32px 32px;
    }
    .process-desktop {
      display: none;
    }
    .process-mobile {
      display: block;
    }
    .mj-link {
      padding-top: ${values.px40} !important;
      display: block !important;
      padding-left: 0 !important;
    }
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
          <MjmlAll padding="0" />
        </MjmlAttributes>
        <MjmlStyle>{css}</MjmlStyle>
      </MjmlHead>
      <MjmlBody cssClass="body" backgroundColor={colors.primaryDark}>
        {/* Header */}
        <MjmlSection>
          <MjmlColumn paddingBottom={values.px32} paddingTop={values.px32}>
            <MjmlText
              fontSize={values.px18}
              mjClass="font-primary"
              align="left"
            >
              <a style={{ textDecoration: 'none' }} href={env.sealCredAddress}>
                <img
                  style={{
                    width: '56px',
                    verticalAlign: 'middle',
                  }}
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
            <MjmlText
              mjClass="font-accent text-formal-accent"
              paddingTop={values.px32}
              fontSize={values.px20}
              fontWeight={700}
            >
              Your token is:
            </MjmlText>
            <MjmlText
              mjClass="font-accent text-secondary"
              paddingBottom={values.px32}
              paddingTop={values.px16}
              fontSize={values.px16}
              fontWeight={700}
            >
              {secret}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSpacer height={values.px64} />

        {/* Body */}
        <MjmlSection
          padding={values.px32}
          borderRadius={values.px16}
          backgroundColor={colors.primary}
        >
          <MjmlColumn>
            <MjmlImage
              width={values.px64}
              src={`${assetsEndpoint}/wow_seal.png`}
            />
            <MjmlSpacer height={values.px8} />
            <MjmlText
              mjClass="font-bold text-secondary"
              fontSize={values.px24}
              color={colors.formal}
              fontWeight={700}
              align="center"
            >
              What now?
            </MjmlText>
            <MjmlSpacer height={values.px8} />
            <MjmlText
              mjClass="font-accent text-secondary"
              fontSize={values.px14}
              line-height={values.px22}
              fontWeight={400}
              align="center"
              color={colors.formal}
            >
              Copy the token above and bring it back to SealCred. From there,
              you can create your ZK proof and mint a ZK badge that you can add
              to your anonymous wallet.
            </MjmlText>
            <MjmlSpacer height={values.px40} />
            <MjmlImage
              src={`${assetsEndpoint}/process_desktop.png`}
              width="434px"
              cssClass="process-desktop"
            />
            <MjmlImage
              src={`${assetsEndpoint}/process_mobile.png`}
              width="377px"
              cssClass="process-mobile"
            />
          </MjmlColumn>
        </MjmlSection>

        <MjmlSpacer height={values.px48} />

        {/* Footer */}

        <MjmlSection>
          <MjmlColumn>
            <MjmlNavbar>
              <MjmlNavbarLink
                href="https://sealcred.xyz/"
                color={colors.formal}
              >
                SealCred
              </MjmlNavbarLink>
              <MjmlNavbarLink
                href="https://blog.bigwhalelabs.com/"
                color={colors.formal}
              >
                Blog
              </MjmlNavbarLink>
              <MjmlNavbarLink
                href="https://twitter.com/bigwhalelabs"
                color={colors.formal}
              >
                Twitter
              </MjmlNavbarLink>
              <MjmlNavbarLink
                href="https://discord.com/invite/NHk96pPZUV"
                color={colors.formal}
              >
                <img
                  className="discord-button"
                  src={`${assetsEndpoint}/discord_button.png`}
                />
              </MjmlNavbarLink>
            </MjmlNavbar>
            <MjmlImage width="300px" src={`${assetsEndpoint}/bwl_logo.png`} />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSpacer height={values.px32} />
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
