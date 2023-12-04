import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
};

export enum AccountStatus {
  Active = 'ACTIVE',
  Closed = 'CLOSED',
  Inactive = 'INACTIVE',
  Suspended = 'SUSPENDED'
}

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
};

export type ErrorType = {
  __typename?: 'ErrorType';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authLogin?: Maybe<AuthPayload>;
  authUserLogin?: Maybe<AuthPayload>;
  changePassword?: Maybe<AuthPayload>;
  deleteUser?: Maybe<AuthPayload>;
  registerUser?: Maybe<AuthPayload>;
  updateUser?: Maybe<AuthPayload>;
};


export type MutationAuthLoginArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationAuthUserLoginArgs = {
  input?: InputMaybe<AuthInput>;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRegisterUserArgs = {
  input?: InputMaybe<SignUpInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<AuthPayload>;
  getUsers?: Maybe<UsersPayload>;
  me?: Maybe<AuthPayload>;
};


export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetUsersArgs = {
  input?: InputMaybe<UsersInput>;
};

export type SignUpInput = {
  creditLimit: Scalars['Int']['input'];
  password: Scalars['String']['input'];
  role?: InputMaybe<UserRole>;
  status?: InputMaybe<AccountStatus>;
  userName: Scalars['String']['input'];
};

export type UpdateUserInput = {
  bettingStatus?: InputMaybe<Scalars['Boolean']['input']>;
  creditLimit?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transferStatus?: InputMaybe<Scalars['Boolean']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  availableCredit?: Maybe<Scalars['Int']['output']>;
  bettingStatus?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  creditDistributedByAgent?: Maybe<Scalars['Int']['output']>;
  creditGivenToAgent?: Maybe<Scalars['Int']['output']>;
  creditGivenToUser?: Maybe<Scalars['Int']['output']>;
  creditLimit?: Maybe<Scalars['Int']['output']>;
  loginStep?: Maybe<Scalars['Boolean']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transferStatus?: Maybe<Scalars['Boolean']['output']>;
  userName: Scalars['String']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Superadmin = 'SUPERADMIN',
  User = 'USER'
}

export type UsersInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
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
  AccountStatus: AccountStatus;
  AuthInput: AuthInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  ChangePasswordInput: ChangePasswordInput;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  ErrorType: ResolverTypeWrapper<ErrorType>;
  Mutation: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Query: ResolverTypeWrapper<{}>;
  SignUpInput: SignUpInput;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  UpdateUserInput: UpdateUserInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  User: ResolverTypeWrapper<User>;
  UserRole: UserRole;
  UsersInput: UsersInput;
  UsersPayload: ResolverTypeWrapper<UsersPayload>;
  AdditionalEntityFields: AdditionalEntityFields;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthInput: AuthInput;
  String: Scalars['String']['output'];
  AuthPayload: AuthPayload;
  ChangePasswordInput: ChangePasswordInput;
  Date: Scalars['Date']['output'];
  ErrorType: ErrorType;
  Mutation: {};
  ID: Scalars['ID']['output'];
  Query: {};
  SignUpInput: SignUpInput;
  Int: Scalars['Int']['output'];
  UpdateUserInput: UpdateUserInput;
  Boolean: Scalars['Boolean']['output'];
  User: User;
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

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type ErrorTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ErrorType'] = ResolversParentTypes['ErrorType']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  authLogin?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, Partial<MutationAuthLoginArgs>>;
  authUserLogin?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, Partial<MutationAuthUserLoginArgs>>;
  changePassword?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'input'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  registerUser?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, Partial<MutationRegisterUserArgs>>;
  updateUser?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, Partial<MutationUpdateUserArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getUser?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, Partial<QueryGetUserArgs>>;
  getUsers?: Resolver<Maybe<ResolversTypes['UsersPayload']>, ParentType, ContextType, Partial<QueryGetUsersArgs>>;
  me?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  availableCredit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  bettingStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  creditDistributedByAgent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creditGivenToAgent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creditGivenToUser?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  creditLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  loginStep?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transferStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UsersPayload'] = ResolversParentTypes['UsersPayload']> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>;
  user?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  ErrorType?: ErrorTypeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
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