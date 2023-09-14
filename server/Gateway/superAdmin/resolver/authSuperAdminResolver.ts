import { signToken } from '@server/Services/authJwt';
import superAdminFindOne from '@server/Database/operation/superAdmin/superAdminFindOne'
import { invalidCreds, userNotExist } from '@server/Gateway/user/errors'
import {
  MutationAuthLoginArgs,
  SuperAdminPayload,
} from '@server/generated/graphql'

export default async (
  _: unknown,
  args: MutationAuthLoginArgs,
): Promise<SuperAdminPayload> => {
  try {
    const { input } = args
    const superAdmin = await superAdminFindOne({ userName: input.userName })
    
    const adminNotExist = userNotExist(superAdmin)
    if (adminNotExist) {
      return {
        error: adminNotExist,
      }
    }
    const validCreds = invalidCreds(superAdmin, input.password)
    if (validCreds) {
      return {
        error: validCreds,
      }
    }
    const token = signToken(superAdmin)

    return {
      superAdmin: superAdmin,
      token: token,
      error: null,
    }
  } catch (error) {
    return error
  }
}
