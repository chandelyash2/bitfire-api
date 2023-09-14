import superAdminModel from '@server/Database/models/superAdminSchema'
import { SuperAdmin } from '@server/generated/graphql'

const createSuperAdmin = (input): Promise<SuperAdmin> => {
  return superAdminModel.create(input)
}
export default createSuperAdmin
