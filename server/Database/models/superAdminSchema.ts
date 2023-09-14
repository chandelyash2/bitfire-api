import { Schema, model } from 'mongoose'

export type SuperAdmin = {
  _id: string
  name: string
  userName: string
  password: string
  status: boolean
  creditLimit: number
  availableCredit: number
  role: string
}

const superAdminSchema = new Schema<SuperAdmin>(
  {
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
    role: {
      type: String,
      default: 'SuperAdmin',
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
const superAdminModel = model('superadmin', superAdminSchema)
export default superAdminModel
