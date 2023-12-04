import userModel from '@server/Database/models/userModel'
import { User } from '@server/generated/graphql'

const userFind = (
  filter?: Record<string, string>,
  limit?: number,
  offset?: number,
  populate?: string,
): Promise<User[] | null> => {
  return userModel
    .find(filter)
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(offset)
    .populate(populate)
    .lean()
}
export default userFind
