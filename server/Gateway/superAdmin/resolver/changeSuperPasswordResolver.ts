import superAdminModel from '@server/Database/models/superAdminSchema'
import superAdminFindOne from '@server/Database/operation/superAdmin/superAdminFindOne'
import { ResolverContext } from '@server/Gateway/types'
import {
  invalidCreds,
  isValidPassword,
  userNotExist,
} from '@server/Gateway/user/errors'
import {
  MutationChangePasswordArgs,
  SuperAdminPayload,
} from '@server/generated/graphql'
import bcrypt from 'bcrypt'

export default async (
  _: unknown,
  args: MutationChangePasswordArgs,
  ctx: ResolverContext,
): Promise<SuperAdminPayload> => {
  const { input } = args
  const userId = ctx.user._id
  const user = await superAdminFindOne({ _id: userId })
  const isUserNotExist = userNotExist(user)
  if (isUserNotExist) {
    return {
      error: isUserNotExist,
    }
  }
  const comaprePassword = invalidCreds(user, input.oldPassword)
  if (comaprePassword) {
    return { error: comaprePassword }
  }
  const isPswdValid = isValidPassword(input.newPassword)
  if (isPswdValid) {
    return {
      error: isPswdValid,
    }
  }
  const hashedPassword = await bcrypt.hash(input.newPassword, 12)

  await superAdminModel.findOneAndUpdate(
    { _id: ctx.user._id },
    { password: hashedPassword },
  )
  return {
    superAdmin: user,
  }
}
