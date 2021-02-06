import { GraphQLClient } from 'graphql-request';
import { HeadersInit } from 'graphql-request/dist/types.dom';
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
  pitInventory?: Maybe<PitInventory>;
  scammers: Array<Scammer>;
  me?: Maybe<User>;
  userAmount: Scalars['Int'];
  getUserByUuid: User;
};


export type QueryPitInventoryArgs = {
  uuid: Scalars['String'];
};


export type QueryGetUserByUuidArgs = {
  uuid: Scalars['String'];
};

export type PitInventory = {
  player: Array<InventoryItem>;
  enderChest: Array<InventoryItem>;
  stash: Array<InventoryItem>;
  armor: Array<InventoryItem>;
  mysticWell?: Maybe<Array<InventoryItem>>;
};

export type InventoryItem = {
  slot: Scalars['Int'];
  itemId?: Maybe<Scalars['Int']>;
  dye?: Maybe<Scalars['Int']>;
  enchants: Array<Enchant>;
};

export type Enchant = {
  name: Scalars['String'];
  description: Array<Scalars['String']>;
  level: Scalars['Int'];
};

export type Scammer = {
  id: Scalars['Int'];
  uuid: Scalars['String'];
  createdAt: Scalars['DateTime'];
  discordIds: Array<ScammerDiscordId>;
  evidence: Array<ScammerEvidence>;
  reason: Scalars['String'];
};


export type ScammerDiscordId = {
  id: Scalars['Int'];
  discordId: Scalars['String'];
  userId: Scalars['Float'];
};

export type ScammerEvidence = {
  id: Scalars['Int'];
  value: Scalars['String'];
  userId: Scalars['Float'];
};

export type User = {
  id: Scalars['Int'];
  minecraftAccount?: Maybe<MinecraftAccount>;
  trades: Array<Trade>;
};

export type MinecraftAccount = {
  uuid: Scalars['String'];
  username: Scalars['String'];
  verificationToken: Scalars['String'];
};

export type Trade = {
  id: Scalars['Float'];
  endUser: User;
  isCompleted: Scalars['Boolean'];
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

export type ContentsFragment = (
  Pick<InventoryItem, 'slot' | 'itemId' | 'dye'>
  & { enchants: Array<Pick<Enchant, 'name' | 'description' | 'level'>> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { login: (
    Pick<AuthResponse, 'successful'>
    & { error?: Maybe<Pick<AuthorizationError, 'object' | 'message'>> }
  ) };

export type RegisterUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterUserMutation = { registerUser: (
    Pick<AuthResponse, 'successful'>
    & { error?: Maybe<Pick<AuthorizationError, 'object' | 'message'>> }
  ) };

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResetPasswordMutation = { resetPassword: Pick<ResetPasswordResponse, 'successful' | 'errorMessage'> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me?: Maybe<Pick<User, 'id'>> };

export type PitInventoryQueryVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type PitInventoryQuery = { pitInventory?: Maybe<{ player: Array<ContentsFragment>, enderChest: Array<ContentsFragment>, stash: Array<ContentsFragment>, mysticWell?: Maybe<Array<ContentsFragment>> }> };

export type UserAmountQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAmountQuery = Pick<Query, 'userAmount'>;

export const ContentsFragmentDoc = gql`
    fragment Contents on InventoryItem {
  slot
  itemId
  dye
  enchants {
    name
    description
    level
  }
}
    `;
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
export const RegisterUserDocument = gql`
    mutation RegisterUser($email: String!, $password: String!) {
  registerUser(data: {email: $email, password: $password}) {
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
export const PitInventoryDocument = gql`
    query PitInventory($uuid: String!) {
  pitInventory(uuid: $uuid) {
    player {
      ...Contents
    }
    enderChest {
      ...Contents
    }
    stash {
      ...Contents
    }
    mysticWell {
      ...Contents
    }
  }
}
    ${ContentsFragmentDoc}`;
export const UserAmountDocument = gql`
    query UserAmount {
  userAmount
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Login(variables: LoginMutationVariables, requestHeaders?: HeadersInit): Promise<LoginMutation> {
      return withWrapper(() => client.request<LoginMutation>(print(LoginDocument), variables, requestHeaders));
    },
    RegisterUser(variables: RegisterUserMutationVariables, requestHeaders?: HeadersInit): Promise<RegisterUserMutation> {
      return withWrapper(() => client.request<RegisterUserMutation>(print(RegisterUserDocument), variables, requestHeaders));
    },
    ResetPassword(variables: ResetPasswordMutationVariables, requestHeaders?: HeadersInit): Promise<ResetPasswordMutation> {
      return withWrapper(() => client.request<ResetPasswordMutation>(print(ResetPasswordDocument), variables, requestHeaders));
    },
    Me(variables?: MeQueryVariables, requestHeaders?: HeadersInit): Promise<MeQuery> {
      return withWrapper(() => client.request<MeQuery>(print(MeDocument), variables, requestHeaders));
    },
    PitInventory(variables: PitInventoryQueryVariables, requestHeaders?: HeadersInit): Promise<PitInventoryQuery> {
      return withWrapper(() => client.request<PitInventoryQuery>(print(PitInventoryDocument), variables, requestHeaders));
    },
    UserAmount(variables?: UserAmountQueryVariables, requestHeaders?: HeadersInit): Promise<UserAmountQuery> {
      return withWrapper(() => client.request<UserAmountQuery>(print(UserAmountDocument), variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;