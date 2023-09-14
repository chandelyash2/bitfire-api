import superAdminModel from '@server/Database/models/superAdminSchema'
import { SuperAdmin } from '@server/generated/graphql'

const superAdminFindOne = (
  filter: Record<string, string>,
): Promise<SuperAdmin> => {
  return superAdminModel.findOne(filter).lean()
}
export default superAdminFindOne
