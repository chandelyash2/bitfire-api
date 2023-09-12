import { ResolverContext } from '@server/Gateway/types'
import { rule } from 'graphql-shield'

export const isAuthenticated = rule({ cache: 'contextual' })(async (
  _,
  args,
  ctx: ResolverContext,
) => {
  return ctx.user !== null
})

export const isAdmin = rule({ cache: 'contextual' })(async (
  parent,
  args,
  ctx,
) => {
  return ctx.user.role === 'admin'
})

export const isSuperAdmin = rule({ cache: 'contextual' })(async (
  parent,
  args,
  ctx,
) => {
  return ctx.user.role === 'superadmin'
})