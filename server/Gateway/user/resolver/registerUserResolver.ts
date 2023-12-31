import bcrypt from 'bcrypt'
import { inValidPhone, isValidPassword, phoneNumberExist } from '../errors'
import {
  AuthPayload,
  MutationRegisterUserArgs,
} from '../../../generated/graphql'
import createUser from '@server/Database/operation/user/createUser'
import { ResolverContext } from '@server/Gateway/types'
import { signToken } from '@server/Services/authJwt'
export default async (
  _: unknown,
  args: MutationRegisterUserArgs,
  ctx: ResolverContext,
): Promise<AuthPayload> => {
  const input = args.input
  const userId = ctx.user._id
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
  }
  const user = await createUser(inputData)
  const token = signToken(user)
  return {
    user: user,
    token: token,
    error: null,
  }
}
