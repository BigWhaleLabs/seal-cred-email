import {
  Mjml,
  Mjml2HtmlOptions,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlClass,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlRaw,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
} from 'mjml-react'
import { assetsEndpoint, discordLink, twitterLink } from './data'
import { render } from 'mjml-react'
import colors from './styles/colors'
import env from './env'
import values from './styles/values'

const gmailLinkStyles = {
  color: colors.formal,
  textDecoration: 'none',
}

const css = `
    ::selection {
      background: #ff7bed35;
    }
    ::-moz-selection {
      background: #ff7bed35;
    }

    * {
      -webkit-tap-highlight-color: var(--transparent);
    }
  
    body {
      filter: none !important;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${colors.tertiary};
    }

    img {
      filter: none !important;
    }
  
    a {
      text-decoration: none !important;
      color: inherit !important;
    }
    a:hover, .hover-img-button:hover, .img-button:hover {
      opacity: 0.7;
    }

    .main {
      background-color: ${colors.primaryBackground};
      max-width: ${values.px700};
    }
  
    .img-button {
      width: ${values.px180},
    }
  
    .shadow-sm {
      box-shadow: 0px 4px 4px rgba(26, 2, 89, 0.25);
    }
  
    .break-all {
      word-break: break-all;
    }
  `

const footerLinkStyles = {
  paddingLeft: values.px40,
  paddingRight: values.px40,
  ...gmailLinkStyles,
}

interface TokenProps {
  secret: string
  domain: string
}

const generateTokenPage = ({ domain, secret }: TokenProps) => {
  const linkToKetlEmailVerification = `${env.KETL_ADDRESS}/email?domain=${domain}&token=${secret}`

  return (
    <Mjml>
      <MjmlHead>
        <MjmlRaw>
          <meta content="light" name="color-scheme" />
          <meta content="light" name="supported-color-schemes" />
        </MjmlRaw>
        <MjmlTitle>Here's your token!</MjmlTitle>
        <MjmlPreview>Here's your token!</MjmlPreview>
        <MjmlAttributes>
          <MjmlClass color={colors.tertiaryDark} name="text-tertiary-dark" />
          <MjmlClass backgroundColor={colors.tertiary} name="bg-tertiary" />
          <MjmlClass
            backgroundColor={colors.primaryBackground}
            name="bg-primary-background"
          />
          <MjmlClass
            backgroundColor={colors.primaryLight}
            name="bg-primary-light"
          />
          <MjmlClass
            fontFamily="Helvetica, Arial, sans-serif"
            name="font-accent"
          />
          <MjmlClass fontFamily="Courier, normal" name="font-primary" />
          <MjmlAll padding="0" />
        </MjmlAttributes>
        <MjmlStyle>{css}</MjmlStyle>
      </MjmlHead>

      <MjmlBody backgroundColor={colors.tertiary}>
        <MjmlSpacer height={values.px32} />
        <MjmlSection
          backgroundColor={colors.primaryBackground}
          borderRadius={values.px18}
          cssClass="main shadow-sm"
          padding={values.px32}
        >
          <MjmlSpacer height={values.px32} />
          {/* Header */}
          <MjmlSection>
            <MjmlText align="center">
              <a href={env.KETL_ADDRESS}>
                <img
                  src={`${assetsEndpoint}/ketl_logo.png`}
                  style={{ verticalAlign: 'middle' }}
                  width={values.px90}
                />
              </a>
            </MjmlText>
          </MjmlSection>

          <MjmlSpacer height={values.px32} />

          <MjmlDivider
            borderColor={colors.tertiaryDark}
            borderWidth={values.px}
          />

          <MjmlSpacer height={values.px32} />

          {/* Token card */}
          <MjmlSection
            borderRadius={values.px18}
            cssClass="shadow-sm"
            mjClass="bg-tertiary"
            padding={values.px2}
          >
            <MjmlColumn
              borderRadius={values.px16}
              mjClass="bg-primary-light"
              padding={values.px16}
            >
              <MjmlSpacer height={values.px16} />
              <MjmlText
                fontSize={values.px24}
                fontWeight={700}
                lineHeight={values.px27}
                mjClass="font-accent text-tertiary-dark"
              >
                Your secure ketl token:
              </MjmlText>
              <MjmlSpacer height={values.px16} />

              {/* Token */}
              <MjmlText
                fontSize={values.px16}
                fontWeight={400}
                lineHeight={values.px18}
                mjClass="font-accent text-tertiary-dark"
              >
                <span style={{ wordBreak: 'break-all' }}>{secret}</span>
              </MjmlText>

              <MjmlSpacer height={values.px24} />

              <MjmlText align="center">
                <a href={linkToKetlEmailVerification} style={gmailLinkStyles}>
                  <img
                    className="hover-img-button img-button"
                    src={`${assetsEndpoint}/token_button.png`}
                    style={{
                      verticalAlign: 'middle',
                      width: values.px180,
                      ...gmailLinkStyles,
                    }}
                  />
                </a>
              </MjmlText>

              <MjmlSpacer height={values.px24} />

              <MjmlText
                align="center"
                color={colors.tertiary}
                fontSize={values.px16}
                lineHeight={values.px18}
                mjClass="font-primary"
              >
                Or copy and paste it into kelt
              </MjmlText>

              <MjmlSpacer height={values.px24} />

              <MjmlDivider
                borderColor={colors.tertiaryDark}
                borderWidth={values.px}
              />

              <MjmlSpacer height={values.px32} />

              <MjmlImage
                height={values.px32}
                src={`${assetsEndpoint}/verifiable_credentials.png`}
                width={values.px200}
              />

              <MjmlSpacer height={values.px24} />
            </MjmlColumn>
          </MjmlSection>

          <MjmlSpacer height={values.px32} />

          {/* Info text */}
          <MjmlSection>
            <MjmlText
              align="left"
              color={colors.alternative}
              fontSize={values.px14}
              lineHeight={values.px16}
              mjClass="font-primary"
            >
              How are emails verified?
            </MjmlText>
            <MjmlSpacer height={values.px16} />
            <MjmlText
              align="left"
              color={colors.primaryLight}
              fontSize={values.px14}
              lineHeight={values.px16}
              mjClass="font-primary"
            >
              In ketl season 1, we curated an allowlist of emails associated
              with founders and VCs. Ultimately, anyone can ask us to send an
              email to any address in the allowlist. However, only those who own
              one of the email addresses in the allowlist possess a valid token.
              Since we never find out which exact token you own, there is no way
              for us to find out the email address/real-world identity
              associated with any ketl user.
            </MjmlText>

            <MjmlSpacer height={values.px16} />
            <MjmlDivider
              borderColor={colors.tertiaryDark}
              borderWidth={values.px}
            />
            <MjmlSpacer height={values.px16} />

            <MjmlText
              align="left"
              color={colors.alternative}
              fontSize={values.px14}
              lineHeight={values.px16}
              mjClass="font-primary"
            >
              Can I trust ketl tokens?
            </MjmlText>
            <MjmlSpacer height={values.px16} />
            <MjmlText
              align="left"
              color={colors.primaryLight}
              fontSize={values.px14}
              lineHeight={values.px16}
              mjClass="font-primary"
            >
              When you enter your token, we don't receive it directly. Instead,
              we get a secure proof called a zero-knowledge proof, which
              confirms that you have a valid token from an approved set, but
              without revealing the specific token you hold. This process
              ensures your privacy, as we can't link your email address to your
              ketl account. This ensures a safe and anonymous experience on the
              app.
            </MjmlText>

            <MjmlSpacer height={values.px16} />
            <MjmlDivider
              borderColor={colors.tertiaryDark}
              borderWidth={values.px}
            />
          </MjmlSection>

          <MjmlSpacer height={values.px64} />

          {/* Footer */}
          <MjmlColumn width="100%">
            <MjmlText
              align="center"
              color={colors.formal}
              fontSize={values.px16}
              mjClass="font-primary"
            >
              <a href="https://blog.bigwhalelabs.com/" style={footerLinkStyles}>
                Blog
              </a>
            </MjmlText>
            <MjmlSpacer height={values.px16} />
            <MjmlText align="center">
              <a href={discordLink} style={gmailLinkStyles}>
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
            <MjmlSpacer height={values.px16} />
            <MjmlText align="center">
              <a href={twitterLink} style={footerLinkStyles}>
                <img
                  className="hover-img-button"
                  src={`${assetsEndpoint}/twitter.png`}
                  style={{ verticalAlign: 'middle' }}
                  width={values.px24}
                />
              </a>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>

        <MjmlSpacer height={values.px32} />
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
