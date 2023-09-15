import { isSuperAdmin } from '@server/Services/shield'
import { allow } from 'graphql-shield'
import AdminAuthPayload from './types/AdminAuthPayload'
import AuthInput from '../user/types/AuthInput'
import adminAuthResolver from './resolver/adminAuthResolver'
import AdminPayload from './types/AdminPayLoad'
import { GraphQLID, GraphQLList, GraphQLNonNull } from 'graphql'
import deleteAdminResolver from './resolver/deleteAdminResolver'
import AdminAuthInput from './types/AdminAuthInput'
import adminSignupResolver from './resolver/adminSignupResolver'
import meAdminResolver from './resolver/meAdminResolver'
import Admin from './types/Admin'
import GetAdminInput from './types/GetAdminInput'
import getAdminsResolver from './resolver/getAdminsResolver'

export const adminQuery = {
  me: {
    type: AdminPayload,
    resolve: meAdminResolver,
  },
  getAdmins: {
    type: new GraphQLList(Admin),
    args: {
      input: {
        type: GetAdminInput,
      },
    },
    resolve: getAdminsResolver,
  },
}

export const adminMutation = {
  registerAdmin: {
    type: AdminAuthPayload,
    args: {
      input: {
        type: AdminAuthInput,
      },
    },
    resolve: adminSignupResolver,
  },
  authAdmin: {
    type: AdminAuthPayload,
    args: {
      input: {
        type: AuthInput,
      },
    },
    resolve: adminAuthResolver,
  },
  deleteAdmin: {
    type: AdminPayload,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: deleteAdminResolver,
  },
}
export const adminPermisiion = {
  Query: {
    getAdmins: isSuperAdmin,
  },
  Mutation: {
    registerAdmin: isSuperAdmin,
    authAdmin: allow,
    deleteAdmin: isSuperAdmin,
  },
}
