import adminModel from '@server/Database/models/adminModel'

export default async (
  _: unknown,
  args: { id: string },
): Promise<string> => {
  const { id } = args
  const deleteUser = await adminModel.findOneAndDelete({ _id: id })
  if (deleteUser) {
    return 'Admin Deleted Successfully'
  }
}
