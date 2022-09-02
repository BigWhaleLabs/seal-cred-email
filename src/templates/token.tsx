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
  MjmlRaw,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
  MjmlWrapper,
} from 'mjml-react'
import { render } from 'mjml-react'
import aligns from '../styles/aligns'
import colors from '../styles/colors'
import env from '.././env'
import values from '../styles/values'

const gmailLinkStyles = { textDecoration: 'none', color: colors.formal }

const css = `
  a {
    text-decoration: none !important;
    color: inherit !important;
  }
  a:hover {
    color: ${colors.tertiary} !important;
  }

  body {
    filter: none !important;
    margin: 0;
    padding: 0 ${values.px16};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: conic-gradient(
        from 90deg at 0.96px 0.96px,
        ${colors.primaryDark} 90deg,
        ${colors.primary} 0
      )
      0 0/${values.px48} ${values.px48};
  }
  img {
    filter: none !important;
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
      0 0/${values.px48} ${values.px48};
  } 
  /* Grid for mobiles */
  @media screen and (max-width: 600px) {
    .body {
      background: conic-gradient(
          from 90deg at 0.96px 0.96px,
          ${colors.primaryDark} 90deg,
          ${colors.primary} 0
        )
        0 0/${values.px32} ${values.px32};
    }
  }


  ::selection {
    background: #ff7bed35;
  }
  ::-moz-selection {
    background: #ff7bed35;
  }

  .break-all {
    word-break: break-all;
  }

  .link-text {
    text-decoration: underline !important;
    color: ${colors.blue} !important;
  }
  .link-text:hover {
    color: ${colors.tertiary} !important;
  }
  .hover-img-button:hover {
    opacity: 0.7;
  }
`

const assetsEndpoint = `${env.SEALCRED_ADDRESS}/img/email`

const generateTokenPage = ({
  secret,
  domain,
}: {
  secret: string
  domain: string
}) => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlRaw>
          <meta name="color-scheme" content="light" />
          <meta name="supported-color-schemes" content="light" />
        </MjmlRaw>
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
          <MjmlClass name="bg-primary" backgroundColor={colors.primary} />
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
                <a style={gmailLinkStyles} href={env.SEALCRED_ADDRESS}>
                  <img
                    width={values.px56}
                    src={`${assetsEndpoint}/sc_logo.png`}
                    style={{ verticalAlign: 'middle' }}
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

          {/* Description card */}

          <MjmlSection mjClass="bg-primary" borderRadius={values.px16}>
            <MjmlColumn
              mjClass="bg-primary"
              padding={values.px30}
              borderRadius={values.px16}
            >
              <MjmlImage
                width={values.px62}
                src={`${assetsEndpoint}/seal.png`}
              />
              <MjmlSpacer height={values.px10} />
              <MjmlText
                mjClass="font-accent text-formal-accent"
                fontWeight={700}
                align={aligns.center}
                fontSize={values.px24}
                lineHeight={values.px27}
              >
                Wait, what is this email?
              </MjmlText>
              <MjmlSpacer height={values.px10} />
              <MjmlText
                mjClass="font-accent text-formal-accent"
                fontWeight={400}
                align={aligns.center}
                fontSize={values.px14}
                lineHeight={values.px22}
              >
                <span className="break-all" style={{ color: '#ff7bed' }}>
                  SealCred Echo
                </span>
                <span>
                  {' '}
                  allows users with verified emails to post anonymously.
                </span>
              </MjmlText>
              <MjmlSpacer height={values.px10} />
              <MjmlText
                mjClass="font-accent text-formal-accent"
                fontWeight={400}
                align={aligns.center}
                fontSize={values.px14}
                lineHeight={values.px22}
              >
                <p>
                  Someone you may or may not know added your email to a list of
                  emails that share the same domain to create anonymous pool. By
                  using the token below at{' '}
                  <a className="link-text" href="https://sealcred.xyz">
                    sealcred.xyz
                  </a>{' '}
                  with an anonymous wallet, you’ll prove you own this email but
                  keep your identity secret—even from us! Don’t believe us?
                  Check out our blog below or check us out at{' '}
                  <a className="link-text" href="https://sealcred.xyz">
                    sealcred.xyz
                  </a>{' '}
                  and{' '}
                  <a className="link-text" href="https://echo.sealcred.xyz">
                    echo.sealcred.xyz
                  </a>
                </p>
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
              <MjmlSpacer height={values.px16} />
              <MjmlText
                mjClass="font-accent text-formal-accent"
                fontWeight={400}
                fontSize={values.px14}
                lineHeight={values.px22}
              >
                <span className="break-all">
                  Use this token here:{' '}
                  <a
                    className="link-text"
                    href="https://sealc.red/app?email={domain}"
                  >
                    sealc.red/app?email={domain}
                  </a>
                </span>
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
                  style={{ paddingLeft: values.px14, ...gmailLinkStyles }}
                >
                  SealCred
                </a>
                <a
                  href="https://blog.bigwhalelabs.com/"
                  style={{ paddingLeft: values.px40, ...gmailLinkStyles }}
                >
                  Blog
                </a>
                <a
                  href="https://twitter.com/bigwhalelabs"
                  style={{
                    paddingRight: values.px20,
                    paddingLeft: values.px40,
                    ...gmailLinkStyles,
                  }}
                >
                  <img
                    width={values.px24}
                    style={{ verticalAlign: 'middle' }}
                    src={`${assetsEndpoint}/twitter.png`}
                    className="hover-img-button"
                  />
                </a>
                <a
                  style={gmailLinkStyles}
                  href="https://discord.com/invite/NHk96pPZUV"
                >
                  <img
                    src={`${assetsEndpoint}/discord_button.png`}
                    className="hover-img-button"
                    style={{ verticalAlign: 'middle', ...gmailLinkStyles }}
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
  { secret, domain }: { secret: string; domain: string },
  options = {
    validationLevel: 'soft',
    minify: false,
  } as Mjml2HtmlOptions
) => render(generateTokenPage({ secret, domain }), options)
