import { isAdmin, isAuthenticated, isSuperAdmin } from '@server/Services/shield'
import { allow, or } from 'graphql-shield'
import AdminAuthPayload from './types/AdminAuthPayload'
import AuthInput from '../user/types/AuthInput'
import adminAuthResolver from './resolver/adminAuthResolver'
import AdminPayload from './types/AdminPayLoad'
import {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'
import deleteAdminResolver from './resolver/deleteAdminResolver'
import AdminAuthInput from './types/AdminAuthInput'
import adminSignupResolver from './resolver/adminSignupResolver'
import meAdminResolver from './resolver/meAdminResolver'
import Admin from './types/Admin'
import GetAdminInput from './types/GetAdminInput'
import getAdminsResolver from './resolver/getAdminsResolver'
import ChangePasswordInput from '../user/types/ChangePasswordInput'
import adminChangePasswordResolver from './resolver/adminChangePasswordResolver'
import User from '../user/types/User'
import getUsersAdminResolver from './resolver/getUsersAdminResolver'
import getAdminResolver from './resolver/getAdminResolver'
import addFundResolver from './resolver/addFundResolver'

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
  getAdminUsers: {
    type: new GraphQLList(User),
    args: {
      input: {
        type: GetAdminInput,
      },
    },
    resolve: getUsersAdminResolver,
  },
  getAdmin: {
    type: AdminPayload,
    args: {
      id: {
        type: GraphQLID,
      },
      userName: {
        type: GraphQLString,
      },
    },
    resolve: getAdminResolver,
  },
}

export const adminMutation = {
  registerUser: {
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
  adminChangePassword: {
    type: AdminPayload,
    args: {
      input: {
        type: ChangePasswordInput,
      },
    },
    resolve: adminChangePasswordResolver,
  },
  addFunds: {
    type: AdminPayload,
    args: {
      adminId: {
        type: new GraphQLNonNull(GraphQLID),
      },
      amount: {
        type: new GraphQLNonNull(GraphQLInt),
      },
    },
    resolve: addFundResolver,
  },
}
export const adminPermisiion = {
  Query: {
    me: isAuthenticated,
    getAdmins: isSuperAdmin,
    getAdminUsers: isSuperAdmin,
    getAdmin: isSuperAdmin,
  },
  Mutation: {
    registerUser: isSuperAdmin,
    authAdmin: allow,
    deleteAdmin: isSuperAdmin,
    adminChangePassword: or(isSuperAdmin, isAdmin),
  },
}
