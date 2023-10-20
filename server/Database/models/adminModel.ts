import { Schema, Types, model } from 'mongoose'

export enum AdminRole {
  Admin = 'admin',
  Superadmin = 'superadmin',
  User = 'user',
}
export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  SUSPENDED = 'SUSPENDED',
  CLOSED = 'CLOSED',
}

export interface Admin extends Document {
  _id: Types.ObjectId
  parentId: Types.ObjectId
  userName: string
  password: string
  status: Status
  creditLimit: number
  availableCredit: number
  role: AdminRole
  bettingStatus: boolean
  transferStatus: boolean
  loginStep: boolean
}

const adminSchema = new Schema<Admin>(
  {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
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
    role: {
      type: String,
      required: true,
      enum: AdminRole,
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
const adminModel = model('user', adminSchema)
export default adminModel
