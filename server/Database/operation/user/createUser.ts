import userModel from '@server/Database/models/userModel'
import { SignUpInput, User } from '@server/generated/graphql'

const createUser = async (input: SignUpInput): Promise<User> => {
  return await userModel.create(input).then((data) => {
    return data.toJSON()
  })
}
export default createUser
