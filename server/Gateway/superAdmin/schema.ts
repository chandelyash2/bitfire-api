import { isSuperAdmin } from '@server/Services/shield'
import AuthInput from '../user/types/AuthInput'
import authSuperAdminResolver from './resolver/authSuperAdminResolver'
import getAdminsResolver from './resolver/getAdminsResolver'
import registerSuperAdminResolver from './resolver/registerSuperAdminResolver'
import AdminListInput from './types/AdminListInput'
import AdminListPayload from './types/AdminListPayload'
import SuperAdminPayload from './types/SuperAdminPayload'
import SuperAdminSignupInput from './types/SuperAdminSignUpInput'
import meSuperAdminResolver from './resolver/meSuperAdminResolver'
import ChangePasswordInput from '../user/types/ChangePasswordInput'
import AdminPayload from '../admin/types/AdminPayLoad'
import AdminAuthInput from '../admin/types/AdminAuthInput'
import adminSignupResolver from './resolver/adminSignupResolver'

export const superAdminQuery = {
  meSuperAdmin: {
    type: SuperAdminPayload,
    resolve: meSuperAdminResolver,
  },
  getAdmins: {
    type: AdminListPayload,
    args: {
      input: {
        type: AdminListInput,
      },
    },
    resolve: getAdminsResolver,
  },
}
export const superAdminMutation = {
  registerSuperAdmin: {
    type: SuperAdminPayload,
    args: {
      input: {
        type: SuperAdminSignupInput,
      },
    },
    resolve: registerSuperAdminResolver,
  },
  registerAdmin: {
    type: AdminPayload,
    args: {
      input: {
        type: AdminAuthInput,
      },
    },
    resolve: adminSignupResolver,
  },
  authSuperAdmin: {
    type: SuperAdminPayload,
    args: {
      input: {
        type: AuthInput,
      },
    },
    resolve: authSuperAdminResolver,
  },
  changeSuperAdminPassword: {
    type: SuperAdminPayload,
    args: {
      input: {
        type: ChangePasswordInput,
      },
    },
  },
}

export const superAdminPermisiion = {
  Query: {
    getAdmins: isSuperAdmin,
    meSuperAdmin: isSuperAdmin,
  },
  Mutation: {
    registerAdmin: isSuperAdmin,
    changeSuperAdminPassword: isSuperAdmin,
  },
}
