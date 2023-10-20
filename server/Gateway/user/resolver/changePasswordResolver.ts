import userFindOne from '@server/Database/operation/user/userFindOne'
import { ResolverContext } from '@server/Gateway/types'
import {
  MutationChangePasswordArgs,
  AuthPayload,
} from '@server/generated/graphql'
import { invalidCreds, isValidPassword, userNotExist } from '../errors'
import bcrypt from 'bcrypt'
import userModel from '@server/Database/models/userModel'

export default async (
  _: unknown,
  args: MutationChangePasswordArgs,
  ctx: ResolverContext,
): Promise<AuthPayload> => {
  try {
    const { input } = args
    const userId = ctx.user._id
    const user = await userFindOne({ _id: userId })
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
    await userModel.findOneAndUpdate(
      { _id: userId },
      { password: hashedPassword, loginStep: true },
    )
    return {
      user: user,
    }
  } catch (error) {
    return error
  }
}
