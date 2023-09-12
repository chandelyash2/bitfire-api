import userModel from '@server/Database/models/userModel'
import { SignUpInput, User } from '@server/generated/graphql'

const createUser = (input: SignUpInput): Promise<User> => {
  return userModel.create(input)
}
export default createUser
