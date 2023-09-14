import adminFindOne from '@server/Database/operation/admin/adminFindOne'
import { invalidCreds, userNotExist } from '@server/Gateway/user/errors'
import { signToken } from '@server/Services/authJwt'
import {
  AdminAuthPayload,
  MutationAuthLoginArgs,
} from '@server/generated/graphql'

export default async (
  _: unknown,
  args: MutationAuthLoginArgs,
): Promise<AdminAuthPayload> => {
  try {
    const { input } = args
    const admin = await adminFindOne({ userName: input.userName })
    const adminNotExist = userNotExist(admin)
    if (adminNotExist) {
      return {
        error: adminNotExist,
      }
    }
    const validCreds = invalidCreds(admin, input.password)
    if (validCreds) {
      return {
        error: validCreds,
      }
    }
    const token = signToken(admin)

    return {
      admin: admin,
      token: token,
      error: null,
    }
  } catch (error) {
    return error
  }
}
