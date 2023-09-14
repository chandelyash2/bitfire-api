import userFind from '@server/Database/operation/user/userFind'
import { QueryGetUsersArgs, UsersPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: QueryGetUsersArgs,
): Promise<UsersPayload> => {
  try {
    const { limit, offset } = args.input

    const users = await userFind({}, limit, offset)
    return {
      user: users,
    }
  } catch (error) {
    return {
      error: error,
    }
  }
}
