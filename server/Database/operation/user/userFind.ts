import userModel from '@server/Database/models/userModel'
import { User } from '@server/generated/graphql'

const userFind = (
  filter: Record<string, string>,
  limit?: number,
  offset?: number,
): Promise<User[] | null> => {
  return userModel
    .find(filter)
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(offset)
    .lean()
}
export default userFind
