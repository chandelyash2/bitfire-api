import bcrypt from 'bcrypt'
import { generateuserName } from '@server/Services/crypto'
import { inValidPhone, isValidPassword, phoneNumberExist } from '../errors'
import {
  AuthPayload,
  MutationRegisterUserArgs,
} from '../../../generated/graphql'
import createUser from '@server/Database/operation/user/createUser'
import { signToken } from '@server/Services/authJwt'
import { ResolverContext } from '@server/Gateway/types'
import userModel from '@server/Database/models/userModel'
import userFindOne from '@server/Database/operation/user/userFindOne'
export default async (
  _: unknown,
  args: MutationRegisterUserArgs,
  ctx: ResolverContext,
): Promise<AuthPayload> => {
  const input = args.input
  const userId = ctx.user._id
  const userCtx = ctx.user.role == 'Superadmin'.toLowerCase() ? true : false
  if (input.role === 'Admin'.toLowerCase() && !userCtx) {
    return {
      error: {
        code: 'UNAUTHORIZED',
        message: 'You do not have permissions',
      },
    }
  }
  const userName = generateuserName()
  const validPassword = isValidPassword(input.password)
  if (validPassword) {
    return {
      user: null,
      error: validPassword,
    }
  }
  const isPhoneValid = inValidPhone(input.phone)
  if (isPhoneValid) {
    return {
      error: isPhoneValid,
    }
  }
  const phoneExist = await phoneNumberExist(input.phone)
  if (phoneExist)
    return {
      error: phoneExist,
    }
  const hashedPassword = await bcrypt.hash(input.password, 12)
  const inputData = {
    ...input,
    parentId: userId,
    password: hashedPassword,
    userName,
  }
  const user = await createUser(inputData)
  if (user) {
    const parentUser = await userFindOne({ _id: userId })

    await userModel.findOneAndUpdate(
      { _id: userId },
      { availableCredit: parentUser.availableCredit - input.creditLimit },
    )
  }
  const token = signToken(user)
  return {
    user: user,
    token: token,
    error: null,
  }
}
