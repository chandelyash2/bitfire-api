import { Schema, model, Types } from 'mongoose'

export enum UserRole {
  ADMIN = 'ADMIN',
  SUPERADMIN = 'SUPERADMIN',
  USER = 'USER',
}
export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
  CLOSED = 'CLOSED',
}
export type User = {
  _id: Types.ObjectId
  parentId: Types.ObjectId
  userName: string
  password: string
  status: Status
  wallet: number
  role: UserRole
  creditLimit: number
  availableCredit: number
  bettingStatus: boolean
  transferStatus: boolean
  loginStep: boolean
}

const userSchema = new Schema<User>(
  {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Status,
      default: Status.ACTIVE,
    },
    role: {
      type: String,
      enum: UserRole,
    },
    creditLimit: {
      type: Number,
    },
    availableCredit: {
      type: Number,
    },
    bettingStatus: {
      type: Boolean,
      default: true,
    },
    transferStatus: {
      type: Boolean,
      default: true,
    },
    loginStep: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)
const userModel = model('users', userSchema)
export default userModel
