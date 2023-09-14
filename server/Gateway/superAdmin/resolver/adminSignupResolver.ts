import bcrypt from 'bcrypt'
import { ResolverContext } from '@server/Gateway/types'
import { isUserNameExist, isValidPassword } from '@server/Gateway/user/errors'
import {
  MutationRegisterAdminArgs,
  SuperAdminPayload,
} from '@server/generated/graphql'

import superAdminModel from '@server/Database/models/superAdminSchema'
import superAdminFindOne from '@server/Database/operation/superAdmin/superAdminFindOne'
import { signToken } from '@server/Services/authJwt'
import createSuperAdmin from '@server/Database/operation/superAdmin/createSuperAdmin'

export default async (
  _: unknown,
  args: MutationRegisterAdminArgs,
  ctx: ResolverContext,
): Promise<SuperAdminPayload> => {
  const input = args.input
  const userId = ctx.user._id

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
    parentId: userId,
    availableCredit: input.creditLimit,
    password: hashedPassword,
  }
  const admin = await createSuperAdmin(inputData)

  const parentUser = await superAdminFindOne({ _id: userId })

  await superAdminModel.findOneAndUpdate(
    { _id: userId },
    {
      availableCredit: parentUser.availableCredit - parseInt(input.creditLimit),
    },
  )

  const token = signToken(admin)
  return {
    superAdmin: admin,
    token: token,
    error: null,
  }
}
