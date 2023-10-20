import adminModel from '@server/Database/models/adminModel'
import adminFindOne from '@server/Database/operation/admin/adminFindOne'
import { userNotExist } from '@server/Gateway/user/errors'
import { AdminPayload } from '@server/generated/graphql'

export default async (
  _: unknown,
  args: { adminId: string; amount: number },
): Promise<AdminPayload> => {
  console.log(args, 'argss')
  const { adminId, amount } = args
  const admin = await adminFindOne({ _id: adminId })
  const adminExist = userNotExist(admin)
  if (adminExist) {
    return {
      error: adminExist,
    }
  }
  const res = await adminModel.findByIdAndUpdate(
    { _id: adminId },
    {
      creditLimit: admin.creditLimit + amount,
      availableCredit: admin.availableCredit + amount,
    },
  )
  if (res) {
    return {
      admin: res.toJSON(),
    }
  }
}
