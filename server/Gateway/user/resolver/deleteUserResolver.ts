import userModel from '@server/Database/models/userModel'

export default async (_: unknown, args: { id: string }): Promise<string> => {
  const { id } = args
  const deleteUser = await userModel
    .findOneAndDelete({ _id: id })
    .then((data) => {
      return data.toJSON()
    })
  if (deleteUser) {
    return 'User Deleted Successfully'
  }
}
