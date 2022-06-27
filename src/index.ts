import * as fs from 'fs'
import * as path from 'path'

const emailBody = fs.readFileSync(
  path.resolve(__dirname, './templates/token.html'),
  'utf8'
) as string

export default emailBody
