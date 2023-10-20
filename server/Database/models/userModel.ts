import { Schema, model, Types } from 'mongoose'
import { Status } from './adminModel'

export type User = {
  _id: Types.ObjectId
  parentId: Types.ObjectId
  userName: string
  phone: string
  password: string
  status: Status
  wallet: number
  role: string
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
      ref: 'admin',
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
      type: String,
      enum: Status,
      default: Status.ACTIVE,
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
