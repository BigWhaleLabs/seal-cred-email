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
  MjmlPreview,
  MjmlRaw,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
} from 'mjml-react'
import {
  activateTokenButton,
  discordButton,
  ketlLogo,
  twitterIcon,
} from './assets'
import { bwlBlog, discordLink, twitterLink, ycLink } from './data'
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
      margin: 0 !important;
      padding: 0 !important;
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale !important;
      background-color: ${colors.tertiary} !important;
    }

    img {
      filter: none !important;
    }
  
    a {
      text-decoration: none !important;
      color: inherit !important;
    }
    a:hover, .hover-img-button:hover, .img-button:hover {
      opacity: 0.7 !important;
    }

    .main {
      background-color: ${colors.primaryBackground} !important;
      max-width: ${values.px700} !important;
    }
  
    .img-button {
      width: ${values.px180} !important;
    }
  
    .shadow-sm {
      box-shadow: 0px 4px 4px hsla(256.552, 96%, 18%, 0.25) !important;
    }
  
    .break-all {
      word-break: break-all !important;
    }
    
    .link-text {
      text-decoration: none !important;
      color: ${colors.primaryLight} !important;
    }
    .link-text:hover {
      text-decoration: underline !important;
      color: ${colors.alternative} !important;
      opacity: 0.7 !important;
    }
    
    @media (prefers-color-scheme: dark) {

    }
  `

const darkCss = `
  @media (prefers-color-scheme: dark) {
  ${css}
  }
`

const finalStyles = css + darkCss

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
  const linkToKetlEmailVerification = `${env.KETL_ADDRESS}/email/${domain}/${secret}`
  const makeLink = (link: string, text: string) => (
    <a className="link-text" href={link} style={{ color: colors.alternative }}>
      {text}
    </a>
  )

  return (
    <Mjml>
      <MjmlHead>
        <MjmlRaw>
          {/* Double meta hack for Outlook, don't remove */}
          <meta></meta>
          <meta content="dark" name="color-scheme" />
          <meta content="dark" name="supported-color-schemes" />
        </MjmlRaw>
        <MjmlTitle>Here's your signup code!</MjmlTitle>
        <MjmlPreview>Here's your signup code!</MjmlPreview>
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
        <MjmlStyle inline>{finalStyles}</MjmlStyle>
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
                  src={ketlLogo}
                  style={{ verticalAlign: 'middle' }}
                  width={values.px90}
                />
              </a>
            </MjmlText>

            <MjmlSpacer height={values.px24} />
            <MjmlText
              align="center"
              color={colors.primaryLight}
              fontSize={values.px24}
              fontWeight={700}
              lineHeight={values.px27}
              mjClass="font-accent text-tertiary-dark"
            >
              Welcome to ketl
            </MjmlText>
            <MjmlText
              align="center"
              color={colors.primaryLight}
              fontSize={values.px24}
              fontWeight={700}
              lineHeight={values.px27}
              mjClass="font-accent"
            >
              An anonymous app for{' '}
              <span style={{ color: colors.alternative }}>Founders</span> and{' '}
              <span style={{ color: colors.alternative }}>VCs</span>
            </MjmlText>
          </MjmlSection>

          <MjmlSpacer height={values.px32} />

          <MjmlDivider borderColor={colors.tertiary} borderWidth={values.px} />

          <MjmlSpacer height={values.px32} />

          {/* Signup code card */}
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
                Your secure ketl signup code:
              </MjmlText>
              <MjmlSpacer height={values.px16} />

              {/* Signup code */}
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
                    src={activateTokenButton}
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
                Or copy and paste it into ketl
              </MjmlText>
              <MjmlSpacer height={values.px2} />
              <MjmlText
                align="center"
                color={colors.accentAlternative}
                fontSize={values.px12}
                lineHeight={values.px18}
                mjClass="font-primary"
              >
                (<strong>DO NOT</strong> Screenshot or share your signup code
                with anyone else)
              </MjmlText>

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
              <span>
                For YC founders, we reference the public founder database
                published by YC on:{' '}
                {makeLink(ycLink, 'ycombinator.com/companies/founders')} to
                generate an anonymity set of founders for the YC credential.
              </span>
              <p>
                For other founders/VCs we curate an allowlist of founder/vc
                emails.
              </p>
              <p>
                Ultimately, anyone can ask us to send an email to any address in
                the allowlist.
              </p>
              <p>
                However, only those who own one of the email addresses in the
                allowlist possess a valid token. Since we never find out which
                exact token you own, there is no way for us to find out the
                email address/real-world identity associated with any ketl user.
              </p>
            </MjmlText>

            <MjmlSpacer height={values.px16} />
            <MjmlDivider
              borderColor={colors.tertiary}
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
              Can I trust ketl signup codes?
            </MjmlText>
            <MjmlSpacer height={values.px16} />
            <MjmlText
              align="left"
              color={colors.primaryLight}
              fontSize={values.px14}
              lineHeight={values.px16}
              mjClass="font-primary"
            >
              When you enter your signup codes, we don't receive it directly.
              Instead, we get a secure proof called a zero-knowledge proof,
              which confirms that you have a valid token from an approved set,
              but without revealing the specific signup code you hold. This
              process ensures your privacy, as we can't link your email address
              to your ketl account. Which ensures a safe and anonymous
              experience on the app.
            </MjmlText>

            <MjmlSpacer height={values.px16} />
            <MjmlDivider
              borderColor={colors.tertiary}
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
              <a href={bwlBlog} style={footerLinkStyles}>
                Blog
              </a>
            </MjmlText>
            <MjmlSpacer height={values.px16} />
            <MjmlText align="center">
              <a href={discordLink} style={gmailLinkStyles}>
                <img
                  className="hover-img-button img-button"
                  src={discordButton}
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
                  src={twitterIcon}
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
