import userModel from '@server/Database/models/userModel'
import { UserPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: { id: string },
): Promise<UserPayload> => {
  const { id } = args
  const deleteUser = await userModel.findOneAndDelete({ _id: id })
  if (deleteUser) {
    return {
      user: deleteUser,
    }
  }
}
