import userModel from '@server/Database/models/userModel'
import { AuthPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: { id: string },
): Promise<AuthPayload> => {
  const { id } = args
  const deleteUser = await userModel.findOneAndDelete({ _id: id })
  if (deleteUser) {
    return {
      user: deleteUser,
    }
  }
}
