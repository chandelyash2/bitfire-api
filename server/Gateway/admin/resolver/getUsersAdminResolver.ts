import adminModel from '@server/Database/models/adminModel'
import { ResolverContext } from '@server/Gateway/types'
import { QueryGetAdminsArgs } from '@server/generated/graphql'
import { Types } from 'mongoose'

export default async (
  _: unknown,
  args: QueryGetAdminsArgs,
  ctx: ResolverContext,
) => {
  const userId = ctx.user._id
  const { limit, offset } = args.input

  const find = await adminModel.aggregate([
    {
      $match: {
        parentId: new Types.ObjectId(userId),
      },
    },

    {
      $lookup: {
        from: 'users',
        localField: '_id',
        foreignField: 'parentId',
        as: 'usersData',
      },
    },
    {
      $unwind: '$usersData',
    },
    {
      $sort: {
        'usersData.createdAt': -1, // 1 for ascending, -1 for descending
      },
    },
    {
      $skip: offset,
    },
    {
      $limit: limit,
    },
    {
      $group: {
        _id: null,
        allUsers: { $push: '$usersData' },
      },
    },
    {
      $project: {
        _id: 0,
        allUsers: 1,
      },
    },
  ])

  if (find.length > 0) {
    return find[0].allUsers
  } else {
    return null
  }
}
