import userFindOne from '@server/Database/operation/user/userFindOne'
import { userNotExist } from '../errors'
import { AuthPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: { id: string },
): Promise<AuthPayload> => {
  const user = await userFindOne({ _id: args.id })
  const userExist = userNotExist(user)
  if (userExist)
    return {
      error: userExist,
    }
  return {
    user: user,
  }
}
