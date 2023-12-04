import bcrypt from 'bcrypt'
import userModel from '@server/Database/models/userModel'
import { AuthPayload, MutationUpdateUserArgs } from '@server/generated/graphql'
import { isValidPassword } from '../errors'

export default async (
  _: unknown,
  args: MutationUpdateUserArgs,
): Promise<AuthPayload> => {
  const input = args.input
  let inputData = {}
  if (input.password) {
    const validPassword = isValidPassword(input.password)
    if (validPassword) {
      return {
        user: null,
        error: validPassword,
      }
    }

    const hashedPassword = await bcrypt.hash(input.password, 12)
    inputData = {
      ...input,
      password: hashedPassword,
      loginStep: false,
    }
  } else {
    inputData = input
  }
  const updateUser = await userModel.findOneAndUpdate(
    { _id: input.id },
    inputData,
  )
  if (updateUser) {
    return {
      user: updateUser.toJSON(),
    }
  } else {
    return {
      error: {
        message: 'Something Went Wrong',
        code: 'INVALID_INPUT',
      },
    }
  }
}
