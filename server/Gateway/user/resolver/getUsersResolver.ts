import userFind from '@server/Database/operation/user/userFind'
import { QueryGetUsersArgs, UsersPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: QueryGetUsersArgs,
): Promise<UsersPayload> => {
  try {
    let condition = {}
    const { filter, limit, offset } = args.input
    if (filter.toString() === 'user') {
      condition = { role: 'user' }
    } else if (filter.toString() === 'admin') {
      condition = { role: 'owner' }
    } else if (filter.toString() === 'all') {
      condition = { $and: [{ $or: [{ role: 'user' }, { role: 'owner' }] }] }
    }
    const users = await userFind(condition, limit, offset)
    return {
      user: users,
    }
  } catch (error) {
    return {
      error: error,
    }
  }
}
