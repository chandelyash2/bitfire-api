import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Admin = {
  __typename?: 'Admin';
  _id: Scalars['ID']['output'];
  availableCredit?: Maybe<Scalars['Int']['output']>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export type AdminAuthInput = {
  creditLimit: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type AdminAuthPayload = {
  __typename?: 'AdminAuthPayload';
  admin?: Maybe<Admin>;
  error?: Maybe<ErrorType>;
  token?: Maybe<Scalars['String']['output']>;
};

export type AdminListInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminListPayload = {
  __typename?: 'AdminListPayload';
  admin?: Maybe<Array<Maybe<Admin>>>;
  error?: Maybe<ErrorType>;
};

export type AdminPayload = {
  __typename?: 'AdminPayload';
  admin?: Maybe<Admin>;
  error?: Maybe<ErrorType>;
};

export type AuthInput = {
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  error?: Maybe<ErrorType>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authAdmin?: Maybe<AdminAuthPayload>;
  authLogin?: Maybe<AuthPayload>;
  authSuperAdmin?: Maybe<SuperAdminPayload>;
  changePassword?: Maybe<UserPayload>;
  changeSuperAdminPassword?: Maybe<SuperAdminPayload>;
  deleteAdmin?: Maybe<AdminPayload>;
  deleteUser?: Maybe<UserPayload>;
  registerAdmin?: Maybe<AdminPayload>;
  registerSuperAdmin?: Maybe<SuperAdminPayload>;
  registerUser?: Maybe<AuthPayload>;
  updateUser?: Maybe<UserPayload>;
};


export type MutationAuthAdminArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationAuthLoginArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationAuthSuperAdminArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationChangeSuperAdminPasswordArgs = {
  input?: InputMaybe<ChangePasswordInput>;
};


export type MutationDeleteAdminArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRegisterAdminArgs = {
  input?: InputMaybe<AdminAuthInput>;
};


export type MutationRegisterSuperAdminArgs = {
  input?: InputMaybe<SuperAdminSignupInput>;
};


export type MutationRegisterUserArgs = {
  input?: InputMaybe<SignUpInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  getAdmins?: Maybe<AdminListPayload>;
  getUsers?: Maybe<UsersPayload>;
  me: UserPayload;
  meSuperAdmin?: Maybe<SuperAdminPayload>;
};


export type QueryGetAdminsArgs = {
  input?: InputMaybe<AdminListInput>;
};


export type QueryGetUsersArgs = {
  input?: InputMaybe<UsersInput>;
};

export type SignUpInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
};

export type SuperAdmin = {
  __typename?: 'SuperAdmin';
  _id: Scalars['ID']['output'];
  availableCredit?: Maybe<Scalars['Int']['output']>;
  creditDistributedByAgent?: Maybe<Scalars['Int']['output']>;
  creditGivenToAgent?: Maybe<Scalars['Int']['output']>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export type SuperAdminPayload = {
  __typename?: 'SuperAdminPayload';
  error?: Maybe<ErrorType>;
  superAdmin?: Maybe<SuperAdmin>;
  token?: Maybe<Scalars['String']['output']>;
};

export type SuperAdminSignupInput = {
  creditLimit: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userName: Scalars['String']['input'];
};

export type UpdateUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export type UserPayload = {
  __typename?: 'UserPayload';
  error?: Maybe<ErrorType>;
  user?: Maybe<User>;
};

export type UsersInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type UsersPayload = {
  __typename?: 'UsersPayload';
  error?: Maybe<ErrorType>;
  user?: Maybe<Array<Maybe<User>>>;
};

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Admin: ResolverTypeWrapper<Admin>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  AdminAuthInput: AdminAuthInput;
  AdminAuthPayload: ResolverTypeWrapper<AdminAuthPayload>;
  AdminListInput: AdminListInput;
  AdminListPayload: ResolverTypeWrapper<AdminListPayload>;
  AdminPayload: ResolverTypeWrapper<AdminPayload>;
  AuthInput: AuthInput;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  ChangePasswordInput: ChangePasswordInput;
  ErrorType: ResolverTypeWrapper<ErrorType>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SignUpInput: SignUpInput;
  SuperAdmin: ResolverTypeWrapper<SuperAdmin>;
  SuperAdminPayload: ResolverTypeWrapper<SuperAdminPayload>;
  SuperAdminSignupInput: SuperAdminSignupInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserPayload: ResolverTypeWrapper<UserPayload>;
  UsersInput: UsersInput;
  UsersPayload: ResolverTypeWrapper<UsersPayload>;
  AdditionalEntityFields: AdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Admin: Admin;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  String: Scalars['String']['output'];
  Boolean: Scalars['Boolean']['output'];
  AdminAuthInput: AdminAuthInput;
  AdminAuthPayload: AdminAuthPayload;
  AdminListInput: AdminListInput;
  AdminListPayload: AdminListPayload;
  AdminPayload: AdminPayload;
  AuthInput: AuthInput;
  AuthPayload: AuthPayload;
  ChangePasswordInput: ChangePasswordInput;
  ErrorType: ErrorType;
  Mutation: {};
  Query: {};
  SignUpInput: SignUpInput;
  SuperAdmin: SuperAdmin;
  SuperAdminPayload: SuperAdminPayload;
  SuperAdminSignupInput: SuperAdminSignupInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
  UserPayload: UserPayload;
  UsersInput: UsersInput;
  UsersPayload: UsersPayload;
  AdditionalEntityFields: AdditionalEntityFields;
};

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']['input']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type UnionDirectiveResolver<Result, Parent, ContextType = any, Args = UnionDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String']['input'];
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type AbstractEntityDirectiveResolver<Result, Parent, ContextType = any, Args = AbstractEntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']['input']>;
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>;
};

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']['input']>;
};

export type ColumnDirectiveResolver<Result, Parent, ContextType = any, Args = ColumnDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IdDirectiveArgs = { };

export type IdDirectiveResolver<Result, Parent, ContextType = any, Args = IdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']['input']>;
};

export type LinkDirectiveResolver<Result, Parent, ContextType = any, Args = LinkDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EmbeddedDirectiveArgs = { };

export type EmbeddedDirectiveResolver<Result, Parent, ContextType = any, Args = EmbeddedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MapDirectiveArgs = {
  path: Scalars['String']['input'];
};

export type MapDirectiveResolver<Result, Parent, ContextType = any, Args = MapDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AdminResolvers<ContextType = any, ParentType extends ResolversParentTypes['Admin'] = ResolversParentTypes['Admin']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  availableCredit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creditLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminAuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminAuthPayload'] = ResolversParentTypes['AdminAuthPayload']> = {
  admin?: Resolver<Maybe<ResolversTypes['Admin']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminListPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminListPayload'] = ResolversParentTypes['AdminListPayload']> = {
  admin?: Resolver<Maybe<Array<Maybe<ResolversTypes['Admin']>>>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdminPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminPayload'] = ResolversParentTypes['AdminPayload']> = {
  admin?: Resolver<Maybe<ResolversTypes['Admin']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ErrorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorType'] = ResolversParentTypes['ErrorType']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  authAdmin?: Resolver<Maybe<ResolversTypes['AdminAuthPayload']>, ParentType, ContextType, Partial<MutationAuthAdminArgs>>;
  authLogin?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, Partial<MutationAuthLoginArgs>>;
  authSuperAdmin?: Resolver<Maybe<ResolversTypes['SuperAdminPayload']>, ParentType, ContextType, Partial<MutationAuthSuperAdminArgs>>;
  changePassword?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'input'>>;
  changeSuperAdminPassword?: Resolver<Maybe<ResolversTypes['SuperAdminPayload']>, ParentType, ContextType, Partial<MutationChangeSuperAdminPasswordArgs>>;
  deleteAdmin?: Resolver<Maybe<ResolversTypes['AdminPayload']>, ParentType, ContextType, RequireFields<MutationDeleteAdminArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  registerAdmin?: Resolver<Maybe<ResolversTypes['AdminPayload']>, ParentType, ContextType, Partial<MutationRegisterAdminArgs>>;
  registerSuperAdmin?: Resolver<Maybe<ResolversTypes['SuperAdminPayload']>, ParentType, ContextType, Partial<MutationRegisterSuperAdminArgs>>;
  registerUser?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, Partial<MutationRegisterUserArgs>>;
  updateUser?: Resolver<Maybe<ResolversTypes['UserPayload']>, ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAdmins?: Resolver<Maybe<ResolversTypes['AdminListPayload']>, ParentType, ContextType, Partial<QueryGetAdminsArgs>>;
  getUsers?: Resolver<Maybe<ResolversTypes['UsersPayload']>, ParentType, ContextType, Partial<QueryGetUsersArgs>>;
  me?: Resolver<ResolversTypes['UserPayload'], ParentType, ContextType>;
  meSuperAdmin?: Resolver<Maybe<ResolversTypes['SuperAdminPayload']>, ParentType, ContextType>;
};

export type SuperAdminResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuperAdmin'] = ResolversParentTypes['SuperAdmin']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  availableCredit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creditDistributedByAgent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creditGivenToAgent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creditLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuperAdminPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuperAdminPayload'] = ResolversParentTypes['SuperAdminPayload']> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  superAdmin?: Resolver<Maybe<ResolversTypes['SuperAdmin']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserPayload'] = ResolversParentTypes['UserPayload']> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPayload'] = ResolversParentTypes['UsersPayload']> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  user?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Admin?: AdminResolvers<ContextType>;
  AdminAuthPayload?: AdminAuthPayloadResolvers<ContextType>;
  AdminListPayload?: AdminListPayloadResolvers<ContextType>;
  AdminPayload?: AdminPayloadResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  ErrorType?: ErrorTypeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SuperAdmin?: SuperAdminResolvers<ContextType>;
  SuperAdminPayload?: SuperAdminPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPayload?: UserPayloadResolvers<ContextType>;
  UsersPayload?: UsersPayloadResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>;
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  column?: ColumnDirectiveResolver<any, any, ContextType>;
  id?: IdDirectiveResolver<any, any, ContextType>;
  link?: LinkDirectiveResolver<any, any, ContextType>;
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>;
  map?: MapDirectiveResolver<any, any, ContextType>;
};

import { ObjectId } from 'mongodb';