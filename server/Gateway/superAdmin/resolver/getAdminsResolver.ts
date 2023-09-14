import adminFind from '@server/Database/operation/admin/adminFind'
import { ResolverContext } from '@server/Gateway/types'
import { QueryGetAdminsArgs } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: QueryGetAdminsArgs,
  ctx: ResolverContext,
) => {
  try {
    const userId = ctx.user._id
    const { limit, offset } = args.input
    const users = await adminFind({ parentId: userId }, limit, offset)
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
