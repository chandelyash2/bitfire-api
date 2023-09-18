import adminModel from '@server/Database/models/adminModel'
import { Admin } from '@server/generated/graphql'

const createAdmin = (input): Promise<Admin> => {
  return adminModel.create(input).then((data) => {
    return data.toJSON()
  })
}
export default createAdmin
