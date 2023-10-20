import adminFind from '@server/Database/operation/admin/adminFind'
import { ResolverContext } from '@server/Gateway/types'
import { QueryGetAdminsArgs } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: QueryGetAdminsArgs,
  ctx: ResolverContext,
) => {
  const userId = ctx.user._id
  const { limit, offset } = args.input
  const find = await adminFind({ parentId: userId }, limit, offset)

  return find
}
