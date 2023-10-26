import { MjmlColumn, MjmlSection, MjmlSpacer, MjmlText } from 'mjml-react'
import { bwlBlog, discordLink, twitterLink } from '../data'
import { discordButton, twitterIcon } from '../assets'
import { gmailLinkStyles } from './Text'
import colors from '../styles/colors'
import values from '../styles/values'

const footerLinkStyles = {
  paddingLeft: values.px40,
  paddingRight: values.px40,
  ...gmailLinkStyles,
}

export default function () {
  return (
    <>
      <MjmlSpacer height={values.px32} />
      <MjmlSection textAlign="center" verticalAlign="middle">
        <MjmlColumn padding="16px">
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
        </MjmlColumn>
        <MjmlColumn>
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
        </MjmlColumn>

        <MjmlColumn padding="16px">
          <MjmlText align="center">
            <a href={twitterLink} style={footerLinkStyles}>
              <img
                alt="twitter"
                className="hover-img-button"
                src={twitterIcon}
                style={{ verticalAlign: 'middle' }}
                width={values.px24}
              />
            </a>
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </>
  )
}
