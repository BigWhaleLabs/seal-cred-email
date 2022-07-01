import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlStyle,
  MjmlText,
  MjmlTitle,
  MjmlAttributes,
  MjmlClass,
  MjmlAll,
  MjmlFont,
} from 'mjml-react'

const colors = {
  accent: '#fed823',
  secondary: '#ff7bed',
  formal: '#efecd6',
  primaryDark: '#0d0030',
}

export const generateTokenPage = ({ secret }: { secret: string }) => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
        <MjmlFont
          name="Space Grotesk"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk"
        />
        <MjmlFont
          name="JetBrains Mono"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono"
        />
        <MjmlAttributes>
          <MjmlClass name="text-accent" color={colors['accent']} />
          <MjmlClass name="text-secondary" color={colors['secondary']} />
          <MjmlClass name="text-formal-accent" color={colors['formal']} />
          <MjmlClass
            name="bg-secondary"
            backgroundColor={colors['secondary']}
          />
          <MjmlClass
            name="bg-primary-dark"
            backgroundColor={colors['primaryDark']}
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
        <MjmlStyle>{`
            body {
              margin: 0;
              padding: 0 20px;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: #0d0030;
              background: conic-gradient(
                  from 90deg at 0.06rem 0.06rem,
                  #0d0030 90deg,
                  #1a0259 0
                )
                0 0/3rem 3rem;
            }
        `}</MjmlStyle>
      </MjmlHead>
      <MjmlBody>
        <MjmlSection>
          <MjmlColumn paddingBottom="32px" paddingTop="32px">
            <MjmlText fontSize="18px" mjClass="font-primary" align="left">
              <a style={{ textDecoration: 'none' }} href="https://sealcred.xyz">
                <img
                  style={{
                    width: '56px',
                    verticalAlign: 'middle',
                  }}
                  src="https://sealcred.xyz/img/logo_dark.jpg"
                />
                <span style={{ color: colors['accent'], paddingLeft: '16px' }}>
                  SealCred
                </span>
                <span
                  style={{
                    color: colors['secondary'],
                    paddingLeft: '4px',
                    paddingRight: '4px',
                  }}
                >
                  |
                </span>
                <span style={{ color: colors['secondary'] }}>work</span>
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
        <MjmlSection paddingBottom="32px"></MjmlSection>
      </MjmlBody>
    </Mjml>
  )
}
