import adminModel from '@server/Database/models/adminModel'

export default async (src) => {
  const admins = await adminModel.aggregate([
    {
      $match: {
        parentId: src._id,
      },
    },
    {
      $lookup: {
        from: 'users',
        localField: '_id',
        foreignField: 'parentId',
        as: 'userData',
      },
    },
    { $unwind: '$userData' },
    {
      $group: {
        _id: null,
        totalAmount: { $sum: '$userData.creditLimit' },
      },
    },
  ])
  return admins[0].totalAmount
}
