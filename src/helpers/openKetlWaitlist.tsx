import VerificationType from '../models/VerificationType'
import env from '../env'

export interface WaitlistProps {
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
  verificationType = VerificationType.email,
  waitlistContext,
}: WaitlistProps) {
  const jumpToContextPage = waitlistContext ? 1 : 0

  return `${env.KETL_ADDRESS}/waitlist/${verificationType}/${anonCode}/${jumpToContextPage}`
}
