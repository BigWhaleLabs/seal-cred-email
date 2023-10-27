import { BodyText, HeaderText } from '../Text'
import { MjmlSpacer } from 'mjml-react'
import { ketlWaitlistLink } from '../../data'
import AttestationType from '@/models/AttestationType'
import Button from '../Button'
import Card from '../Card'
import colors from '../../styles/colors'
import values from '../../styles/values'

export default function () {
  return (
    <Card>
      <HeaderText>Try your YC Alum NFT</HeaderText>
      <MjmlSpacer height={values.px16} />
      <BodyText center color={colors.tertiary}>
        Have your wallet that contains your YC Alum NFT. Use that to verify
        instead using Metamask or Rainbow Wallet
      </BodyText>
      <MjmlSpacer height={values.px16} />
      <Button href={ketlWaitlistLink({ attestationType: AttestationType.YC })}>
        Try YC Alum NFT
      </Button>
    </Card>
  )
}
