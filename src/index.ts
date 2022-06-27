import * as fs from 'fs'
import * as path from 'path'

const htmlBody = fs.readFileSync(
  path.resolve(__dirname, './templates/token.html'),
  'utf8'
) as string

export { htmlBody }
