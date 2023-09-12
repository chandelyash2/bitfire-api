import crypto from 'crypto'
export const generateuserName = () => {
  return crypto.randomBytes(3).toString('base64')
}
