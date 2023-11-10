import { AttestationTypeWithNull } from '../models/AttestationType'
import VerificationType from '../models/VerificationType'
import env from '../env'

export interface OpenKetlProps {
  attestationType: AttestationTypeWithNull
  value?: string
  verificationType?: VerificationType
  waitlistContext?: boolean
  passed?: boolean
  inviteCode?: string
}

export default function ({
  attestationType,
  inviteCode = '',
  passed = false,
  value = 'null',
  verificationType = VerificationType.email,
  waitlistContext,
}: OpenKetlProps) {
  const attestation = attestationType?.toString() || 'null'
  const jumpToContextPage = waitlistContext ? 1 : 0

  return `${
    env.KETL_ADDRESS
  }/waitlist/${verificationType}/${attestation}/${value}/${jumpToContextPage}/${Number(
    passed
  )}/${inviteCode}`
}
