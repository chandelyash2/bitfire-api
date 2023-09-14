import bcrypt from 'bcrypt'
import { ResolverContext } from '@server/Gateway/types'
import { isUserNameExist, isValidPassword } from '@server/Gateway/user/errors'
import {
  AdminAuthPayload,
  MutationRegisterAdminArgs,
} from '@server/generated/graphql'
import createAdmin from '@server/Database/operation/admin/createAdmin'
import adminFindOne from '@server/Database/operation/admin/adminFindOne'
import superAdminModel from '@server/Database/models/superAdminSchema'
import superAdminFindOne from '@server/Database/operation/superAdmin/superAdminFindOne'
import { signToken } from '@server/Services/authJwt'

export default async (
  _: unknown,
  args: MutationRegisterAdminArgs,
  ctx: ResolverContext,
): Promise<AdminAuthPayload> => {
  const input = args.input
  const userId = ctx.user._id

  const finAdmin = await adminFindOne({ userName: input.userName })
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
  const admin = await createAdmin(inputData)

  const parentUser = await superAdminFindOne({ _id: userId })

  await superAdminModel.findOneAndUpdate(
    { _id: userId },
    {
      availableCredit: parentUser.availableCredit - parseInt(input.creditLimit),
    },
  )

  const token = signToken(admin)
  return {
    admin: admin,
    token: token,
    error: null,
  }
}
