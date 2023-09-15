import userFind from '@server/Database/operation/user/userFind'
import { ResolverContext } from '@server/Gateway/types'
import { QueryGetUsersArgs, UsersPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: QueryGetUsersArgs,
  ctx: ResolverContext,
): Promise<UsersPayload> => {
  try {
    const adminId = ctx.user._id
    const { limit, offset } = args.input

    const users = await userFind({ parentId: adminId }, limit, offset)
    return {
      user: users,
    }
  } catch (error) {
    return {
      error: error,
    }
  }
}
