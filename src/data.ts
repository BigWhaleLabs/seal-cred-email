import { AttestationTypeWithNull } from './models/AttestationType'
import VerificationType from './models/VerificationType'
import env from './env'

export const discordLink = 'https://discord.gg/3SeNsSv3W8'
export const twitterLink = 'https://twitter.com/ketlxyz'
export const ycLink = 'https://ycombinator.com/companies/founders'
export const bwlBlog = 'https://blog.bigwhalelabs.com'
export const ketlWaitlistLink = ({
  attestationType,
  waitlistContext,
}: {
  attestationType: AttestationTypeWithNull
  waitlistContext?: boolean
}) => {
  const type = attestationType?.toString() || 'null'
  return `${env.KETL_ADDRESS}/waitlist/${VerificationType.email}/${type}/${
    waitlistContext ? 1 : 0
  }`
}
export const assetsEndpoint = `${env.ASSETS_ADDRESS}/media/email`
