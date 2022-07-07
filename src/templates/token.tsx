import {
  Mjml,
  Mjml2HtmlOptions,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
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
        <MjmlSection>
          <MjmlColumn paddingBottom="32px" paddingTop="32px">
            <MjmlText fontSize="18px" mjClass="font-primary" align="left">
              <a style={{ textDecoration: 'none' }} href={sealCredAddress}>
                <img
                  style={{
                    width: '56px',
                    verticalAlign: 'middle',
                  }}
                  src={`${assetsEndpoint}/sc_logo.png`}
                />
                <span style={{ color: colors.accent, paddingLeft: '16px' }}>
                  SealCred
                </span>
                <span
                  style={{
                    color: colors.secondary,
                    paddingLeft: '4px',
                    paddingRight: '4px',
                  }}
                >
                  |
                </span>
                <span style={{ color: colors.secondary }}>work</span>
              </a>
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection mjClass="bg-secondary" padding="1px" borderRadius="16px">
          <MjmlColumn
            paddingLeft="24px"
            mjClass="bg-primary-dark"
            borderRadius="16px"
          >
            <MjmlText
              mjClass="font-accent text-formal-accent"
              paddingTop="32px"
              fontSize="20px"
              fontWeight={700}
            >
              Your token is:
            </MjmlText>
            <MjmlText
              mjClass="font-accent text-secondary"
              paddingBottom="32px"
              paddingTop="16px"
              fontSize="16px"
              fontWeight={700}
            >
              {secret}
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection
          mjClass="bg-primary"
          padding="1px"
          borderRadius="16px"
          textAlign="center"
        >
          <MjmlColumn>
            <MjmlImage src={`${assetsEndpoint}/wow_seal.png`} />
            <MjmlText
              mjClass="font-accent font-bold text-secondary"
              paddingBottom="32px"
              paddingTop="16px"
              fontSize="24px"
              fontWeight={700}
            >
              What now?
            </MjmlText>
            <MjmlText
              mjClass="font-accent font-bold text-secondary"
              paddingBottom="32px"
              paddingTop="16px"
              fontSize="14px"
              fontWeight={400}
            >
              Copy the token above and bring it back to SealCred. From there,
              you can create your ZK proof and mint a ZK badge that you can add
              to your anonymous wallet.
            </MjmlText>
            <MjmlImage
              src={`${assetsEndpoint}/process_desktop.png`}
            ></MjmlImage>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingBottom="32px">
          <MjmlColumn>
            <MjmlNavbar>
              <MjmlNavbarLink href="https://sealcred.xyz/" color="#ffffff">
                SealCred
              </MjmlNavbarLink>
              <MjmlNavbarLink
                href="https://blog.bigwhalelabs.com/"
                color="#ffffff"
              >
                Blog
              </MjmlNavbarLink>
              <MjmlNavbarLink
                href="https://twitter.com/bigwhalelabs"
                color="#ffffff"
              >
                Twitter
              </MjmlNavbarLink>
              <MjmlNavbarLink href="https://discord.com/invite/NHk96pPZUV">
                <MjmlButton background-color="#01FEB6" color="#0D0030">
                  Join our Discord
                </MjmlButton>
              </MjmlNavbarLink>
            </MjmlNavbar>
            <MjmlImage src={`${assetsEndpoint}/bwl_logo.png`} />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSpacer height="32px" />
      </MjmlBody>
    </Mjml>
  )
}

export const generateTokenHtml = (
  { secret }: { secret: string },
  options = {
    validationLevel: 'soft',
  } as Mjml2HtmlOptions
) => render(generateTokenPage({ secret }), options)
