import { ResolverContext } from '@server/Gateway/types'
import {
  MutationChangePasswordArgs,
  AdminPayload,
} from '@server/generated/graphql'
import bcrypt from 'bcrypt'
import {
  invalidCreds,
  isValidPassword,
  userNotExist,
} from '@server/Gateway/user/errors'
import adminFindOne from '@server/Database/operation/admin/adminFindOne'
import adminModel from '@server/Database/models/adminModel'

export default async (
  _: unknown,
  args: MutationChangePasswordArgs,
  ctx: ResolverContext,
): Promise<AdminPayload> => {
  try {
    const { input } = args

    const userId = ctx.user._id
    const user = await adminFindOne({ _id: userId })
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
    await adminModel.findOneAndUpdate(
      { _id: userId },
      { password: hashedPassword, loginStep: true },
    )

    return {
      admin: user,
    }
  } catch (error) {
    return error
  }
}
