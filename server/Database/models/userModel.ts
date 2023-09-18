import { Schema, model, Types } from 'mongoose'

export type User = {
  _id: Types.ObjectId
  parentId: Types.ObjectId
  name: string
  userName: string
  phone: string
  password: string
  status: boolean
  wallet: number
  role: string
  creditLimit: number
  availableCredit: number
}

const userSchema = new Schema<User>(
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
    creditLimit: {
      type: Number,
    },
    availableCredit: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
)
const userModel = model('users', userSchema)
export default userModel
