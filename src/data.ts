import { AttestationTypeWithNull } from './models/AttestationType'
import VerificationType from './models/VerificationType'
import env from './env'

export const discordLink = 'https://discord.gg/3SeNsSv3W8'
export const twitterLink = 'https://twitter.com/ketlxyz'
export const ycLink = 'https://ycombinator.com/companies/founders'
export const bwlBlog = 'https://blog.bigwhalelabs.com'
export const ketlWaitlistLink = ({
  attestationType,
  passed,
  verificationType = VerificationType.email,
  waitlistContext,
}: {
  attestationType: AttestationTypeWithNull
  verificationType?: VerificationType
  waitlistContext?: boolean
  passed?: boolean
}) => {
  const waitlistWithPassed = passed ? 'waitlistPassed' : 'waitlist'
  const type = attestationType?.toString() || 'null'

  return `${
    env.KETL_ADDRESS
  }/${waitlistWithPassed}/${verificationType}/${type}/${
    waitlistContext ? 1 : 0
  }`
}
export const assetsEndpoint = `${env.ASSETS_ADDRESS}/media/email`
