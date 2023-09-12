import userModel from '@server/Database/models/userModel'
import { User } from '@server/generated/graphql'

const userFindOne = (filter: Record<string, string>): Promise<User> => {
  return userModel.findOne(filter).lean()
}
export default userFindOne
