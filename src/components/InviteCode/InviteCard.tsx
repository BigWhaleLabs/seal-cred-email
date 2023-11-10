import { HeaderText } from '../Text'
import { InviteCodeProps } from '../../layouts/inviteCode'
import { MjmlSpacer, MjmlText } from 'mjml-react'
import Button from '../Button'
import Card from '../Card'
import TwitterBlock from './TwitterBlock'
import colors from '../../styles/colors'
import openKetlInviteCode from '../../helpers/openKetlInviteCode'
import openKetlWaitlist from '../../helpers/openKetlWaitlist'
import values from '../../styles/values'

export default function InviteCard({
  attestationType,
  inviteCode,
  passedWaitlist,
  twitterMetadata,
  value,
}: InviteCodeProps) {
  const ketlLinkToVerification = passedWaitlist
    ? openKetlWaitlist({
        attestationType,
        inviteCode,
        passed: passedWaitlist,
        value,
      })
    : openKetlInviteCode({ email: value, inviteCode })

  return (
    <Card>
      <HeaderText>Your secure ketl invite code:</HeaderText>

      <MjmlSpacer height={values.px16} />

      <Button href={ketlLinkToVerification}>Activate account</Button>

      <MjmlSpacer height={values.px16} />

      {/* invite code */}
      <MjmlText
        fontSize={values.px16}
        fontWeight={400}
        lineHeight={values.px18}
        mjClass="font-accent text-tertiary-dark"
      >
        <span style={{ wordBreak: 'break-all' }}>{inviteCode}</span>
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
      {!!twitterMetadata && passedWaitlist && (
        <TwitterBlock
          attestationType={attestationType}
          value={twitterMetadata.id}
        />
      )}
    </Card>
  )
}
