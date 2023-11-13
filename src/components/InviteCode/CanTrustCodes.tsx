import { BodyText } from '../Text'
import { MjmlSpacer } from 'mjml-react'
import colors from '../../styles/colors'
import values from '../../styles/values'

export default function CanTrustCodes() {
  return (
    <>
      <BodyText color={colors.alternative}>
        Can I trust ketl invite codes?
      </BodyText>
      <MjmlSpacer height={values.px16} />
      <BodyText>
        When you enter your invite code, we don't receive it directly. Instead,
        we get a secure proof called a zero-knowledge proof, which confirms that
        you have a valid invite code from an approved set, but without revealing
        the specific invite code you hold. This process ensures your privacy, as
        we can't link your email address to your ketl account. This ensures a
        safe and anonymous experience on the app.
      </BodyText>
    </>
  )
}
