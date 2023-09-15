import { Schema, model } from 'mongoose'

export type User = {
  _id: string
  parentId: string
  name: string
  userName: string
  phone: string
  password: string
  status: boolean
  wallet: number
  role: string
}

const userSchema = new Schema<User>(
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
    role: {
      type: String,
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
)
const userModel = model('users', userSchema)
export default userModel
