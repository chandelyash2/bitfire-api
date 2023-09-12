import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

export const userRole = new GraphQLEnumType({
  name: 'UserRole',
  values: {
    User: {
      value: 'user',
    },
    Admin: {
      value: 'admin',
    },
    Superadmin: {
      value: 'superadmin',
    },
  },
})
const User = new GraphQLObjectType({
  name: 'User',
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
    phone: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    role: {
      type: new GraphQLNonNull(userRole),
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
  }),
})
export default User
