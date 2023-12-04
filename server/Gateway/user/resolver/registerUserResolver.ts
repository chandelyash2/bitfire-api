import bcrypt from 'bcrypt'
import { isValidPassword } from '../errors'
import {
  AuthPayload,
  MutationRegisterUserArgs,
} from '../../../generated/graphql'
import createUser from '@server/Database/operation/user/createUser'
import { ResolverContext } from '@server/Gateway/types'
import { signToken } from '@server/Services/authJwt'
import userFindOne from '@server/Database/operation/user/userFindOne'
import userModel from '@server/Database/models/userModel'
export default async (
  _: unknown,
  args: MutationRegisterUserArgs,
  ctx: ResolverContext,
): Promise<AuthPayload> => {
  const input = args.input
  const userId = ctx.user._id
  const parentUser = await userFindOne({ _id: userId })
  let checkValidAuth = true
  if (input.role === 'USER' && parentUser.role === 'ADMIN') {
    checkValidAuth = true
  } else if (input.role === 'ADMIN' && parentUser.role === 'SUPERADMIN') {
    checkValidAuth = true
  } else {
    checkValidAuth = false
  }

  if (checkValidAuth) {
    if (parentUser.availableCredit < input.creditLimit) {
      return {
        error: {
          message: "You don't have enough credits",
          code: 'ENOUGH_CREDITS',
        },
      }
    }

    const validPassword = isValidPassword(input.password)
    if (validPassword) {
      return {
        user: null,
        error: validPassword,
      }
    }

    const hashedPassword = await bcrypt.hash(input.password, 12)
    const inputData = {
      ...input,
      parentId: userId,
      password: hashedPassword,
      availableCredit: input.creditLimit,
    }
    const user = await createUser(inputData)

    await userModel.findOneAndUpdate(
      { _id: userId },
      {
        availableCredit: parentUser.availableCredit - input.creditLimit,
      },
    )
    const token = signToken(user)
    return {
      user: user,
      token: token,
      error: null,
    }
  }else{
    return {
      error:{
        message:"You Don't have valid rights",
        code:"INVALID_AUTH"
      }
    }
  }
}
