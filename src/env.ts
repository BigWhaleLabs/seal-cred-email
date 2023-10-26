import * as dotenv from 'dotenv'
import { cleanEnv, str } from 'envalid'
import { cwd } from 'process'
import { resolve } from 'path'

dotenv.config({ path: resolve(cwd(), '.env') })

// eslint-disable-next-line node/no-process-env
export default cleanEnv(process.env, {
  ASSETS_ADDRESS: str({ default: 'https://ketl.xyz' }),
  KETL_ADDRESS: str({ default: 'https://ketl.xyz/#' }),
  MAILGUN_API_KEY: str({ default: '' }),
  MAILGUN_DOMAIN: str({ default: '' }),
  TEST_EMAIL: str({ default: 'test@bwl.gg' }),
})
