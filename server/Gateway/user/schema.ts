import { GraphQLID, GraphQLNonNull } from 'graphql'
import SignupInputType from './types/SignupInput'
import registerUserResolver from './resolver/registerUserResolver'
import AuthPayload from './types/AuthPayload'
import AuthInput from './types/AuthInput'
import authUserResolver from './resolver/authUserResolver'
import UpdateUserInput from './types/UpdateUserInput'
import updateUserResolver from './resolver/updateUserResolver'
import { isAdmin, isAuthenticated, isSuperAdmin } from '@services/shield'
import { allow, or } from 'graphql-shield'
import getUsersResolver from './resolver/getUsersResolver'
import GetUsersInput from './types/GetUsersInput'
import UsersPayload from './types/UsersPayload'
import deleteUserResolver from './resolver/deleteUserResolver'
import userInfoResolver from './resolver/userInfoResolver'
import ChangePasswordInput from './types/ChangePasswordInput'
import changePasswordResolver from './resolver/changePasswordResolver'
import getUserResolver from './resolver/getUserResolver'
import authResolver from './resolver/authResolver'

export const userQuery = {
  me: {
    type: AuthPayload,
    resolve: userInfoResolver,
  },
  getUsers: {
    type: UsersPayload,
    args: {
      input: {
        type: GetUsersInput,
      },
    },
    resolve: getUsersResolver,
  },
  getUser: {
    type: AuthPayload,
    args: {
      id: {
        type: GraphQLID,
      },
    },
    resolve: getUserResolver,
  },
}

export const userMutation = {
  registerUser: {
    type: AuthPayload,
    args: {
      input: {
        type: SignupInputType,
      },
    },
    resolve: registerUserResolver,
  },
  authLogin: {
    type: AuthPayload,
    args: {
      input: {
        type: AuthInput,
      },
    },
    resolve: authResolver,
  },
  authUserLogin: {
    type: AuthPayload,
    args: {
      input: {
        type: AuthInput,
      },
    },
    resolve: authUserResolver,
  },
  updateUser: {
    type: AuthPayload,
    args: {
      input: {
        type: UpdateUserInput,
      },
    },
    resolve: updateUserResolver,
  },
  deleteUser: {
    type: AuthPayload,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
    },
    resolve: deleteUserResolver,
  },
  changePassword: {
    type: AuthPayload,
    args: {
      input: {
        type: new GraphQLNonNull(ChangePasswordInput),
      },
    },
    resolve: changePasswordResolver,
  },
}
export const userPermission = {
  Query: {
    me: isAuthenticated,
    getUsers: or(isAdmin, isSuperAdmin),
    getUser: or(isAdmin, isSuperAdmin),
  },
  Mutation: {
    authLogin: allow,
    registerUser: or(isAdmin, isSuperAdmin),
    updateUser: isAuthenticated,
  },
}
