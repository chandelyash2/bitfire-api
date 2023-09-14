import adminModel from '@server/Database/models/adminModel'
import { Admin } from '@server/generated/graphql'

const adminFind = (
  filter: Record<string, string>,
  limit?: number,
  offset?: number,
): Promise<Admin[] | null> => {
  return adminModel
    .find(filter)
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(offset)
    .lean()
}
export default adminFind
