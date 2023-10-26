import {
  MjmlAll,
  MjmlAttributes,
  MjmlClass,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlTitle,
} from 'mjml-react'
import colors from '../styles/colors'
import values from '../styles/values'

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

interface HeadProps {
  title: string
  preview: string
}

export default function ({ preview, title }: HeadProps) {
  return (
    <MjmlHead>
      <MjmlRaw>
        {/* Double meta hack for Outlook, don't remove */}
        <meta></meta>
        <meta content="dark" name="color-scheme" />
        <meta content="dark" name="supported-color-schemes" />
      </MjmlRaw>
      <MjmlTitle>{title}</MjmlTitle>
      <MjmlPreview>{preview}</MjmlPreview>
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
  )
}
