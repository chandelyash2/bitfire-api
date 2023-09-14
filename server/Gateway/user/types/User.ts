import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

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
    status: {
      type: GraphQLBoolean,
    },
    role: {
      type: GraphQLString,
    },
  }),
})
export default User
