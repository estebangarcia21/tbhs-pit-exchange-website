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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  scammers: Array<Scammer>;
  me?: Maybe<User>;
  userAmount: Scalars['Int'];
  getUserByUuid: User;
};


export type QueryGetUserByUuidArgs = {
  uuid: Scalars['String'];
};

export type Scammer = {
  id: Scalars['Int'];
  uuid: Scalars['String'];
  createdAt: Scalars['DateTime'];
  discordId: Scalars['String'];
  evidence?: Maybe<Scalars['String']>;
  reason: Scalars['String'];
};


export type User = {
  id: Scalars['Int'];
  email: Scalars['String'];
  password: Scalars['String'];
  minecraftAccount?: Maybe<MinecraftAccount>;
};

export type MinecraftAccount = {
  uuid: Scalars['String'];
  username: Scalars['String'];
  verificationToken: Scalars['String'];
};

export type Mutation = {
  createTrade: Trade;
  login: AuthResponse;
  logout: Scalars['Boolean'];
  registerUser: AuthResponse;
  resetPassword: ResetPasswordResponse;
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


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};

export type Trade = {
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
  successful: Scalars['Boolean'];
  user?: Maybe<User>;
  error?: Maybe<AuthorizationError>;
};

export type AuthorizationError = {
  object: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type AuthArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ResetPasswordResponse = {
  successful: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { login: (
    Pick<AuthResponse, 'successful'>
    & { error?: Maybe<Pick<AuthorizationError, 'object' | 'message'>> }
  ) };

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResetPasswordMutation = { resetPassword: Pick<ResetPasswordResponse, 'successful' | 'errorMessage'> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: Maybe<Pick<User, 'id'>> };

export type UserAmountQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAmountQuery = Pick<Query, 'userAmount'>;


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    successful
    error {
      object
      message
    }
  }
}
    `;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($email: String!) {
  resetPassword(email: $email) {
    successful
    errorMessage
  }
}
    `;
export const MeDocument = gql`
    query Me {
  me {
    id
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
    Login(variables: LoginMutationVariables, requestHeaders?: Headers): Promise<LoginMutation> {
      return withWrapper(() => client.request<LoginMutation>(print(LoginDocument), variables, requestHeaders));
    },
    ResetPassword(variables: ResetPasswordMutationVariables, requestHeaders?: Headers): Promise<ResetPasswordMutation> {
      return withWrapper(() => client.request<ResetPasswordMutation>(print(ResetPasswordDocument), variables, requestHeaders));
    },
    Me(variables?: MeQueryVariables, requestHeaders?: Headers): Promise<MeQuery> {
      return withWrapper(() => client.request<MeQuery>(print(MeDocument), variables, requestHeaders));
    },
    UserAmount(variables?: UserAmountQueryVariables, requestHeaders?: Headers): Promise<UserAmountQuery> {
      return withWrapper(() => client.request<UserAmountQuery>(print(UserAmountDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;