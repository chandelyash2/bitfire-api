import adminModel from '@server/Database/models/adminModel'
import { AdminAuthPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: { id: string },
): Promise<AdminAuthPayload> => {
  const { id } = args
  const deleteUser = await adminModel.findOneAndDelete({ _id: id })
  if (deleteUser) {
    return {
      admin: deleteUser,
    }
  }
}
