import superAdminFindOne from '@server/Database/operation/superAdmin/superAdminFindOne'
import { ResolverContext } from '@server/Gateway/types'
import { SuperAdminPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args,
  ctx: ResolverContext,
): Promise<SuperAdminPayload> => {
  const find = await superAdminFindOne({ _id: ctx.user._id })
  return {
    superAdmin: find,
  }
}
