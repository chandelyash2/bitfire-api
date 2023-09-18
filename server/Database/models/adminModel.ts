import { Schema, Types, model } from 'mongoose'

export enum AdminRole {
  Admin = 'admin',
  Superadmin = 'superadmin',
}

export interface Admin extends Document {
  _id: Types.ObjectId
  parentId: Types.ObjectId
  name: string
  userName: string
  password: string
  status: boolean
  creditLimit: number
  availableCredit: number
  role: AdminRole
}

const adminSchema = new Schema<Admin>(
  {
    parentId: {
      type: Schema.Types.ObjectId,
      ref: 'admin',
    },
    name: {
      type: String,
      required: true,
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
      type: Boolean,
      default: true,
    },
    creditLimit: {
      type: Number,
    },
    availableCredit: {
      type: Number,
    },
    role: {
      type: String,
      required: true,
      enum: AdminRole,
    },
  },
  {
    timestamps: true,
  },
)
const adminModel = model('admin', adminSchema)
export default adminModel
