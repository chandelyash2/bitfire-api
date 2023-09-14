import { Schema, model } from 'mongoose'

export type Admin = {
  _id: string
  parentId: string
  name: string
  userName: string
  password: string
  role: string
  status: boolean
  creditLimit: number
  availableCredit: number
}

const adminSchema = new Schema<Admin>(
  {
    parentId: {
      type: String,
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
      default: 'Admin',
    },
  },
  {
    timestamps: true,
  },
)
const adminModel = model('admin', adminSchema)
export default adminModel
