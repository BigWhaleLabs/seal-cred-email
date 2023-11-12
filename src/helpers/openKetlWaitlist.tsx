import { AttestationTypeWithNull } from '../models/AttestationType'
import VerificationType from '../models/VerificationType'
import env from '../env'

export interface WaitlistProps {
  attestationType: AttestationTypeWithNull
  verificationType?: VerificationType
  waitlistContext?: boolean
  anonCode: string
}

export interface WaitlistPassedParams {
  id: string
  inviteCode?: string
}

export function openKetlWaitlistPassed({
  id,
  inviteCode = '',
}: WaitlistPassedParams) {
  return `${env.KETL_ADDRESS}/waitlistPassed/${id}/${inviteCode}`
}

export default function ({
  anonCode = 'null',
  attestationType,
  verificationType = VerificationType.email,
  waitlistContext,
}: WaitlistProps) {
  const attestation = attestationType?.toString() || 'null'
  const jumpToContextPage = waitlistContext ? 1 : 0

  return `${env.KETL_ADDRESS}/waitlist/${verificationType}/${attestation}/${anonCode}/${jumpToContextPage}`
}
