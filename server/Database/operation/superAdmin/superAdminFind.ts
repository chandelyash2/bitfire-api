import superAdminModel from '@server/Database/models/superAdminSchema'
import { Admin } from '@server/generated/graphql'

const superAdminFind = (
  filter: Record<string, string>,
  limit?: number,
  offset?: number,
): Promise<Admin[] | null> => {
  return superAdminModel
    .find(filter)
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(offset)
    .lean()
}
export default superAdminFind
