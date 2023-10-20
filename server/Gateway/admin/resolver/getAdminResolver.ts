import adminFindOne from '@server/Database/operation/admin/adminFindOne'
import { AdminPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: { userName: string; id: string },
): Promise<AdminPayload> => {
  const { id, userName } = args
  let condition = {}
  if (id) {
    condition = { _id: id }
  } else {
    condition = { userName: userName }
  }
  const admin = await adminFindOne(condition)
  if (!admin) {
    return {
      error: {
        message: `UserName doesn't exist`,
        code: 'NO_ADMIN_FOUND',
      },
    }
  }
  return {
    admin: admin,
  }
}
