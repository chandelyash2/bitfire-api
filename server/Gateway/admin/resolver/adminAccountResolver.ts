import userFindOne from '@server/Database/operation/user/userFindOne'
import { ResolverContext } from '@server/Gateway/types'

export default async (_: unknown, args: unknown, ctx: ResolverContext) => {
  const userId = ctx.user._id
  const user = await userFindOne({ _id: userId })
  return {
    admin: user,
    error: null,
  }
}
