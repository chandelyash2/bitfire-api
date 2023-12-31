import userFindOne from '@server/Database/operation/user/userFindOne'
import { AuthPayload, MutationAuthLoginArgs } from '@server/generated/graphql'
import { invalidCreds } from '../errors'
import { signToken } from '@server/Services/authJwt'

export default async (
  _: unknown,
  args: MutationAuthLoginArgs,
): Promise<AuthPayload> => {
  try {
    const { input } = args
    const user = await userFindOne({ userName: input.userName })
    const validCreds = invalidCreds(user, input.password)
    if (validCreds) {
      return {
        error: validCreds,
      }
    }
    const token = signToken(user)

    return {
      user: user,
      token: token,
      error: null,
    }
  } catch (error) {
    return error
  }
}
