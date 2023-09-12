import userFind from '@server/Database/operation/user/userFind'
import {QueryGetUsersArgs } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: QueryGetUsersArgs,
) => {
  try {
    const { limit, offset } = args.input
    const users = await userFind({ role: 'admin' }, limit, offset)    
    return {
      admin: users,
      error: null,
    }
  } catch (error) {
    return {
      admin: null,
      error: error,
    }
  }
}
