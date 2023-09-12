import { userNotExist } from '../errors'
import userFindOne from '@server/Database/operation/user/userFindOne'
import { ResolverContext } from '@server/Gateway/types'
import { UserPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: unknown,
  ctx: ResolverContext,
): Promise<UserPayload> => {
  const { _id } = ctx.user
  const user = await userFindOne({ _id })
  const userExist = userNotExist(user)
  if (userExist)
    return {
      error: userExist,
    }
  return {
    user: user,
  }
}
