import adminFindOne from '@server/Database/operation/admin/adminFindOne'
import { ResolverContext } from '@server/Gateway/types'
import { AdminPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args,
  ctx: ResolverContext,
): Promise<AdminPayload> => {
  const find = await adminFindOne({ _id: ctx.user._id })
  return {
    admin: find,
  }
}
