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

const css = `
.body {
  margin: 0;
  padding: 0 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${colors.primaryDark};
  background: conic-gradient(
      from 90deg at 0.06rem 0.06rem,
      ${colors.primaryDark} 90deg,
      ${colors.primary} 0
    )
    0 0/3rem 3rem;
  }

  a:hover {
    color: ${colors.tertiary} !important;
  }

  .discord_button {
    background-color: ${colors.tertiary};
    border-radius: 40px;
    padding: 16px 24px;
    box-shadow: 0px 0px 16px ${colors.tertiary};
    border: none !important;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }
  .discord_button:hover {
    background-color: ${colors.tertiaryHover};
    box-shadow: 0px 0px 8px ${colors.tertiary};
  }

  .process-desktop {
    display: block;
  }
  .process-mobile {
    display: none;
  }
  .sc-link {
    padding-left: 42px;
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    .process-desktop {
      display: none;
    }
    .process-mobile {
      display: block;
    }
    .sc-link {
      padding-left: 0px;
    }
  }
`

const sealCredAddress = 'http://localhost:3000'
const assetsEndpoint = `${sealCredAddress}/img/email`

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
              <a style={{ textDecoration: 'none' }} href={sealCredAddress}>
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
                <p className="sc-link">SealCred</p>
              </MjmlNavbarLink>
              <MjmlNavbarLink
                href="https://blog.bigwhalelabs.com/"
                color={colors.formal}
                paddingLeft={values.px42}
              >
                Blog
              </MjmlNavbarLink>
              <MjmlNavbarLink
                href="https://twitter.com/bigwhalelabs"
                color={colors.formal}
                paddingLeft={values.px42}
              >
                Twitter
              </MjmlNavbarLink>
              <MjmlNavbarLink
                href="https://discord.com/invite/NHk96pPZUV"
                color={colors.formal}
                paddingLeft={values.px42}
                paddingRight={values.px42}
                paddingTop={values.px16}
              >
                <button className="discord_button font-primary">
                  Join our Discord
                </button>
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