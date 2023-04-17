import {
  Mjml,
  Mjml2HtmlOptions,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlClass,
  MjmlColumn,
  MjmlDivider,
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
import aligns from '@/styles/aligns'
import colors from '@/styles/colors'
import env from '@/env'
import values from '@/styles/values'

const gmailLinkStyles = { color: colors.formal, textDecoration: 'none' }

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
        ${colors.primaryBackground} 0
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
        ${colors.primaryBackground} 0
      )
      0 0/${values.px48} ${values.px48};
  }

  .img-button {
    width: ${values.px200};
  }

  @media screen and (max-width: 350px) {
    body {
      padding: 0;
    }
    .body {
      padding: 0 ${values.px8};
    }

  }
  @media screen and (max-width: 310px) {
    body {
      padding: 0;
    }
    .body {
      padding: 0;
    }
  }
  /* Grid for mobiles */
  @media screen and (max-width: 600px) {
    .body {
      background: conic-gradient(
          from 90deg at 0.96px 0.96px,
          ${colors.primaryDark} 90deg,
          ${colors.primaryBackground} 0
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
    color: ${colors.primary} !important;
  }
  .link-text:hover {
    color: ${colors.tertiary} !important;
  }
  .hover-img-button:hover {
    opacity: 0.7;
  }
`

interface TokenProps {
  secret: string
  domain: string
}

const assetsEndpoint = `${env.SEALCRED_ADDRESS}/img/email`

const generateTokenPage = ({ domain, secret }: TokenProps) => {
  const sealcredLink = (link: string, text: string) => (
    <a className="link-text" href={link}>
      {text}
    </a>
  )
  const linkToSCEmailVerification = `https://sealcred.xyz/app?domain=${domain}&token=${secret}`

  return (
    <Mjml>
      <MjmlHead>
        <MjmlRaw>
          <meta content="light" name="color-scheme" />
          <meta content="light" name="supported-color-schemes" />
        </MjmlRaw>
        <MjmlTitle>Here's your token!</MjmlTitle>
        <MjmlPreview>Here's your token!</MjmlPreview>
        <MjmlFont
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk"
          name="Space Grotesk"
        />
        <MjmlFont
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono"
          name="JetBrains Mono"
        />
        <MjmlAttributes>
          <MjmlClass color={colors.accent} name="text-accent" />
          <MjmlClass color={colors.secondary} name="text-secondary" />
          <MjmlClass color={colors.formal} name="text-formal-accent" />
          <MjmlClass backgroundColor={colors.secondary} name="bg-secondary" />
          <MjmlClass
            backgroundColor={colors.primaryBackground}
            name="bg-primary-background"
          />
          <MjmlClass
            backgroundColor={colors.primaryDark}
            name="bg-primary-dark"
          />
          <MjmlClass
            fontFamily="Space Grotesk, sans-serif"
            name="font-accent"
          />
          <MjmlClass
            fontFamily="JetBrains Mono, sans-serif"
            name="font-primary"
          />
          <MjmlAll padding="0" />
        </MjmlAttributes>
        <MjmlStyle>{css}</MjmlStyle>
      </MjmlHead>
      <MjmlBody backgroundColor={colors.primaryDark} cssClass="body">
        <MjmlWrapper paddingLeft={values.px16} paddingRight={values.px16}>
          <MjmlSpacer height={values.px32} />
          {/* Header */}
          <MjmlSection>
            <MjmlColumn>
              <MjmlText
                align="left"
                fontSize={values.px18}
                mjClass="font-primary"
              >
                <a href={env.SEALCRED_ADDRESS} style={gmailLinkStyles}>
                  <img
                    src={`${assetsEndpoint}/sc_logo.png`}
                    style={{ verticalAlign: 'middle' }}
                    width={values.px56}
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
                  <span style={{ color: colors.secondary }}>Echo</span>
                </a>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSpacer height={values.px32} />

          {/* Description card */}

          <MjmlSection
            borderRadius={values.px16}
            mjClass="bg-primary-background"
          >
            <MjmlColumn
              borderRadius={values.px16}
              mjClass="bg-primary-background"
              padding={values.px30}
            >
              <MjmlImage
                src={`${assetsEndpoint}/seal.png`}
                width={values.px62}
              />
              <MjmlSpacer height={values.px10} />
              <MjmlText
                align={aligns.center}
                fontSize={values.px24}
                fontWeight={700}
                lineHeight={values.px27}
                mjClass="font-accent text-formal-accent"
              >
                Wait, what is this email?
              </MjmlText>
              <MjmlSpacer height={values.px10} />
              <MjmlText
                align={aligns.center}
                fontSize={values.px14}
                fontWeight={400}
                lineHeight={values.px22}
                mjClass="font-accent text-formal-accent"
              >
                <span className="break-all" style={{ color: colors.secondary }}>
                  SealCred Echo
                </span>
                <span>
                  {' '}
                  allows users with verified emails to post anonymously.
                </span>
              </MjmlText>
              <MjmlSpacer height={values.px10} />
              <MjmlText
                align={aligns.center}
                fontSize={values.px14}
                fontWeight={400}
                lineHeight={values.px22}
                mjClass="font-accent text-formal-accent"
              >
                <p>
                  Someone you may or may not know added your email to a list of
                  emails that share the same domain to create anonymous pool. By
                  using the token below at{' '}
                  {sealcredLink('https://sealcred.xyz', 'sealcred.xyz')} with an
                  anonymous wallet, you’ll prove you own this email but keep
                  your identity secret—even from us! Don’t believe us? Check out
                  our blog below or check us out at{' '}
                  {sealcredLink('https://sealcred.xyz', 'sealcred.xyz')} and{' '}
                  {sealcredLink(
                    'https://echo.sealcred.xyz',
                    'echo.sealcred.xyz'
                  )}
                </p>
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>

          <MjmlSpacer height={values.px32} />

          {/* Token card */}

          <MjmlSection
            borderRadius={values.px16}
            mjClass="bg-secondary"
            padding={values.px}
          >
            <MjmlColumn
              borderRadius={values.px16}
              mjClass="bg-primary-dark"
              padding={values.px16}
            >
              <MjmlSpacer height={values.px16} />
              <MjmlText
                fontSize={values.px24}
                fontWeight={700}
                lineHeight={values.px27}
                mjClass="font-accent text-formal-accent"
              >
                Your token is:
              </MjmlText>
              <MjmlSpacer height={values.px16} />
              <MjmlText
                fontSize={values.px16}
                fontWeight={400}
                lineHeight={values.px18}
                mjClass="font-accent text-secondary"
              >
                <span className="break-all">{secret}</span>
              </MjmlText>
              <MjmlText
                color={colors.formal}
                fontSize={values.px16}
                mjClass="font-primary"
              >
                <a href={linkToSCEmailVerification} style={gmailLinkStyles}>
                  <img
                    className="hover-img-button img-button"
                    src={`${assetsEndpoint}/token_button.png`}
                    style={{
                      verticalAlign: 'middle',
                      width: values.px200,
                      ...gmailLinkStyles,
                    }}
                  />
                </a>
              </MjmlText>
              <MjmlSpacer height={values.px6} />
              <MjmlDivider
                borderColor={colors.darkBlue}
                borderWidth={values.px}
              />
              <MjmlSpacer height={values.px32} />
              <MjmlWrapper
                backgroundColor={colors.primaryBackground}
                borderRadius={values.px8}
                verticalAlign="middle"
              >
                <MjmlSpacer height={values.px12} />
                <MjmlText
                  align={aligns.center}
                  fontSize={values.px14}
                  fontWeight={700}
                  lineHeight={values.px22}
                  mjClass="font-accent text-secondary"
                >
                  <span>
                    This token/url/button is a password, never share it with
                    anyone!
                  </span>
                </MjmlText>
                <MjmlSpacer height={values.px12} />
              </MjmlWrapper>
              <MjmlSpacer height={values.px24} />
              <MjmlText
                fontSize={values.px14}
                fontWeight={400}
                lineHeight={values.px22}
                mjClass="font-accent text-formal-accent"
              >
                <span>
                  If button doesn’t work, copy and paste this token url into
                  your browser: {linkToSCEmailVerification}
                </span>
              </MjmlText>
              <MjmlSpacer height={values.px16} />
            </MjmlColumn>
          </MjmlSection>

          <MjmlSpacer height={values.px32} />

          {/* Footer */}

          <MjmlSection
            fullWidth
            paddingLeft={values.px8}
            paddingRight={values.px8}
          >
            <MjmlColumn>
              <MjmlText
                align="center"
                color={colors.formal}
                fontSize={values.px16}
                mjClass="font-primary"
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
                    paddingLeft: values.px40,
                    paddingRight: values.px20,
                    ...gmailLinkStyles,
                  }}
                >
                  <img
                    className="hover-img-button"
                    src={`${assetsEndpoint}/twitter.png`}
                    style={{ verticalAlign: 'middle' }}
                    width={values.px24}
                  />
                </a>
                <a
                  href="https://discord.com/invite/NHk96pPZUV"
                  style={gmailLinkStyles}
                >
                  <img
                    className="hover-img-button img-button"
                    src={`${assetsEndpoint}/discord_button.png`}
                    style={{
                      verticalAlign: 'middle',
                      width: values.px200,
                      ...gmailLinkStyles,
                    }}
                  />
                </a>
              </MjmlText>

              <MjmlImage src={`${assetsEndpoint}/bwl_logo.png`} width="300px" />

              <MjmlSpacer height={values.px32} />
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  )
}

export default function (
  { domain, secret }: TokenProps,
  options = {
    minify: false,
    validationLevel: 'soft',
  } as Mjml2HtmlOptions
) {
  return render(generateTokenPage({ domain, secret }), options)
}
