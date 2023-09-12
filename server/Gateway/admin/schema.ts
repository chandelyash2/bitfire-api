import { isAdmin, isSuperAdmin } from '@server/Services/shield'
import adminAccountResolver from './resolver/adminAccountResolver'
import getAdminsResolver from './resolver/getAdminsResolver'
import AdminListPayload from './types/AdminListPayload'
import AdminPayload from './types/AdminPayLoad'
import GetAdminInput from './types/GetAdminInput'
import { or } from 'graphql-shield'

export const adminQuery = {
  getAdmins: {
    type: AdminListPayload,
    args: {
      input: {
        type: GetAdminInput,
      },
    },
    resolve: getAdminsResolver,
  },
  getAdminAccount: {
    type: AdminPayload,
    resolve: adminAccountResolver,
  },
}

export const adminPermisiion = {
  Query: {
    getAdmins: isSuperAdmin,
    getAdminAccount: or(isAdmin, isSuperAdmin),
  },
}
