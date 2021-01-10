import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  userAmount: Scalars['Int'];
  getUserByUuid: User;
};


export type QueryGetUserByUuidArgs = {
  uuid: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  password: Scalars['String'];
  minecraftAccount?: Maybe<MinecraftAccount>;
};

export type MinecraftAccount = {
  __typename?: 'MinecraftAccount';
  uuid: Scalars['String'];
  username: Scalars['String'];
  verificationToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTrade: Trade;
  login: AuthResponse;
  logout: Scalars['Boolean'];
  registerUser: AuthResponse;
};


export type MutationCreateTradeArgs = {
  data: CreateTradeInput;
};


export type MutationLoginArgs = {
  data: AuthArgs;
};


export type MutationRegisterUserArgs = {
  data: AuthArgs;
};

export type Trade = {
  __typename?: 'Trade';
  id: Scalars['Int'];
  user: User;
  endUser: User;
};

export type CreateTradeInput = {
  endUserAccountUuid: Scalars['String'];
  userTrade: Scalars['String'];
  endUserTrade: Scalars['String'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  user?: Maybe<User>;
  error?: Maybe<Error>;
};

export type Error = {
  __typename?: 'Error';
  object: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type AuthArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'password'>
    & { minecraftAccount?: Maybe<(
      { __typename?: 'MinecraftAccount' }
      & Pick<MinecraftAccount, 'uuid' | 'verificationToken'>
    )> }
  )> }
);

export type UserAmountQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAmountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'userAmount'>
);


export const MeDocument = gql`
    query Me {
  me {
    id
    email
    password
    minecraftAccount {
      uuid
      verificationToken
    }
  }
}
    `;
export const UserAmountDocument = gql`
    query UserAmount {
  userAmount
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Me(variables?: MeQueryVariables, requestHeaders?: Headers): Promise<MeQuery> {
      return withWrapper(() => client.request<MeQuery>(print(MeDocument), variables, requestHeaders));
    },
    UserAmount(variables?: UserAmountQueryVariables, requestHeaders?: Headers): Promise<UserAmountQuery> {
      return withWrapper(() => client.request<UserAmountQuery>(print(UserAmountDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;