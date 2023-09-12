import { Schema, model } from 'mongoose'

export enum UserRole {
  User = 'user',
  Admin = 'admin',
  Superadmin = 'superadmin',
}
export type User = {
  _id: string
  parentId: string
  name: string
  userName: string
  phone: string
  password: string
  role: UserRole
  status: boolean
  creditLimit: number
  availableCredit: number
}

const userSchema = new Schema<User>(
  {
    parentId: {
      type: String,
      ref: 'users',
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
    phone: {
      type: String,
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
      enum: UserRole,
    },
  },
  {
    timestamps: true,
  },
)
const userModel = model('users', userSchema)
export default userModel
