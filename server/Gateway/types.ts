import {  User } from '@server/generated/graphql'

export interface IGetUserAuthInfoRequest extends Request {
  user: User // or any other type
}
export type IAuthRequest = IGetUserAuthInfoRequest & {
  headers: { authorization: string }
}
export type ResolverContext = {
  req: Request
  res: Response
  user: Partial<User>
}
