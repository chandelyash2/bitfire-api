import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import adminFind from '@server/Database/operation/admin/adminFind'


const SuperAdmin = new GraphQLObjectType({
  name: 'SuperAdmin',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: GraphQLString,
    },
    role: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLBoolean,
    },
    creditLimit: {
      type: GraphQLInt,
    },
    availableCredit: {
      type: GraphQLInt,
    },
    creditGivenToAgent: {
      type: GraphQLInt,
      resolve: async (src) => {
        const admin = await adminFind({ parentId: src._id })
        const totalCredit = admin.reduce((prev, curr) => {
          return prev + curr.creditLimit
        }, 0)
        return totalCredit
      },
    },
    creditDistributedByAgent: {
      type: GraphQLInt,
    },
  }),
})
export default SuperAdmin
