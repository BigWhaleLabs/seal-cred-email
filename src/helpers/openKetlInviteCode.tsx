import env from '../env'

interface InviteCodeProps {
  email: string
  inviteCode: string
}

export default function ({ email, inviteCode }: InviteCodeProps) {
  const domain = email.split('@')[1]
  return `${env.KETL_ADDRESS}/email/${domain}/${inviteCode}`
}
