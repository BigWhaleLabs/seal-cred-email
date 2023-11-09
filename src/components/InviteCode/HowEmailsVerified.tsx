import { BodyText } from '../Text'
import { MjmlSpacer, MjmlText } from 'mjml-react'
import { ycLink } from '../../data'
import AttestationType from '../../models/AttestationType'
import colors from '../../styles/colors'
import makeLink from '../../helpers/makeLink'
import values from '../../styles/values'

export default function HowEmailsVerified({
  attestationType,
}: {
  attestationType: AttestationType
}) {
  const isYc =
    attestationType === AttestationType.YC ||
    attestationType === AttestationType.TopYC
  const inlineYcLink = makeLink(ycLink, 'ycombinator.com/companies/founders')

  return (
    <>
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
      <BodyText>
        {isYc ? (
          <span>
            For YC founders, we reference the public founder database published
            by YC on: {inlineYcLink} to generate an anonymity set of founders
            for the YC credential.
          </span>
        ) : null}
        <p></p>
        {isYc ? null : (
          <span>
            For founders/VCs we curate an allowlist of founder/vc emails.
          </span>
        )}
        <p></p>
        Ultimately, anyone can ask us to send an email to any address in the
        allowlist.<p></p>
        However, only those who own one of the email addresses in the allowlist
        possess a valid token. Since we never find out which exact token you
        own, there is no way for us to find out the email address/real-world
        identity associated with any ketl user.
      </BodyText>
    </>
  )
}