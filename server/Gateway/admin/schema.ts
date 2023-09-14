import { isSuperAdmin } from '@server/Services/shield'
import { allow } from 'graphql-shield'
import AdminAuthPayload from './types/AdminAuthPayload'
import adminSignupResolver from './resolver/adminSignupResolver'
import AuthInput from '../user/types/AuthInput'
import adminAuthResolver from './resolver/adminAuthResolver'
import AdminAuthInput from './types/AdminAuthInput'
import AdminPayload from './types/AdminPayLoad'
import { GraphQLID, GraphQLNonNull } from 'graphql'
import deleteAdminResolver from './resolver/deleteAdminResolver'

export const adminQuery = {}

export const adminMutation = {
  // registerAdmin: {
  //   type: AdminAuthPayload,
  //   args: {
  //     input: {
  //       type: AdminAuthInput,
  //     },
  //   },
  //   resolve: adminSignupResolver,
  // },
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
  Query: {},
  Mutation: {
    registerAdmin: isSuperAdmin,
    authAdmin: allow,
    deleteAdmin: isSuperAdmin,
  },
}
