import {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql'

export const AccountStatus = new GraphQLEnumType({
  name: 'AccountStatus',
  values: {
    ACTIVE: {
      value: 'ACTIVE',
    },
    INACTIVE: {
      value: 'INACTIVE',
    },
    SUSPENDED: {
      value: 'SUSPENDED',
    },
    CLOSED: {
      value: 'CLOSED',
    },
  },
})
const AdminAuthInput = new GraphQLInputObjectType({
  name: 'AdminAuthInput',
  fields: () => ({
    userName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    creditLimit: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    status: {
      type: AccountStatus,
    },
    role: {
      type: GraphQLString,
    },
  }),
})
export default AdminAuthInput
