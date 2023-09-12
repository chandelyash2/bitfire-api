import { MutationUpdateUserArgs } from '@server/generated/graphql'

export default async (_: unknown, args: MutationUpdateUserArgs) => {
  console.log(args, 'as')

}
