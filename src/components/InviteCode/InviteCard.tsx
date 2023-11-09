import { HeaderText } from '../Text'
import { MjmlSpacer, MjmlText } from 'mjml-react'
import { TokenProps } from '../../layouts/inviteCode'
import Button from '../Button'
import Card from '../Card'
import TwitterBlock from './TwitterBlock'
import colors from '../../styles/colors'
import env from '../../env'
import values from '../../styles/values'

export default function InviteCard(props: TokenProps) {
  const { attestationType, email, secret, twitterHandle } = props
  const domain = email.split('@')[1]
  const linkToKetlEmailVerification = `${env.KETL_ADDRESS}/email/${domain}/${secret}`

  return (
    <Card>
      <HeaderText>Your secure ketl invite code:</HeaderText>

      <MjmlSpacer height={values.px16} />

      <Button href={linkToKetlEmailVerification}>Activate account</Button>

      <MjmlSpacer height={values.px16} />

      {/* invite code */}
      <MjmlText
        fontSize={values.px16}
        fontWeight={400}
        lineHeight={values.px18}
        mjClass="font-accent text-tertiary-dark"
      >
        <span style={{ wordBreak: 'break-all' }}>{secret}</span>
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
        (<strong>DO NOT</strong> Screenshot or share your invite code with
        anyone else)
      </MjmlText>
      {!!twitterHandle && (
        <TwitterBlock
          attestationType={attestationType}
          twitterHandle={twitterHandle}
        />
      )}
    </Card>
  )
}
