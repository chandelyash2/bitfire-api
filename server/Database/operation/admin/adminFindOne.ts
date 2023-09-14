import adminModel from '@server/Database/models/adminModel'
import { Admin } from '@server/generated/graphql'

const adminFindOne = (filter: Record<string, string>): Promise<Admin> => {
  return adminModel.findOne(filter).lean()
}
export default adminFindOne
