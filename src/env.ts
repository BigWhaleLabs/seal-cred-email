import { cleanEnv, str } from 'envalid'

// eslint-disable-next-line node/no-process-env
export default cleanEnv(process.env, {
  KETL_ADDRESS: str({
    default: 'http://localhost:5173',
  }),
})
