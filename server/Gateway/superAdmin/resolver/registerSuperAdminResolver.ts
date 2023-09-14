import createSuperAdmin from '@server/Database/operation/superAdmin/createSuperAdmin'
import superAdminFindOne from '@server/Database/operation/superAdmin/superAdminFindOne'
import { isUserNameExist, isValidPassword } from '@server/Gateway/user/errors'
import { signToken } from '@server/Services/authJwt'
import {
  MutationRegisterSuperAdminArgs,
  SuperAdminPayload,
} from '@server/generated/graphql'
import bcrypt from 'bcrypt'
export default async (
  _: unknown,
  args: MutationRegisterSuperAdminArgs,
): Promise<SuperAdminPayload> => {
  const input = args.input

  const finAdmin = await superAdminFindOne({ userName: input.userName })
  const isAdminExist = isUserNameExist(finAdmin)
  if (isAdminExist) {
    return {
      error: isAdminExist,
    }
  }
  const validPassword = isValidPassword(input.password)
  if (validPassword) {
    return {
      error: validPassword,
    }
  }
  const hashedPassword = await bcrypt.hash(input.password, 12)
  const inputData = {
    ...input,
    availableCredit: input.creditLimit,
    password: hashedPassword,
  }
  const superAdmin = await createSuperAdmin(inputData)

  const token = signToken(superAdmin)
  return {
    superAdmin: superAdmin,
    token: token,
    error: null,
  }
}
