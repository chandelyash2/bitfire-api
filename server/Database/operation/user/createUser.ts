import userModel from '@server/Database/models/userModel'
import { User } from '@server/generated/graphql'

const createUser = async (input): Promise<User> => {
  return await userModel.create(input).then((data) => {
    return data.toJSON()
  })
}
export default createUser
