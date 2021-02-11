import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
}

export type Query = {
  pitInventory?: Maybe<PitInventory>
  scammers: Array<Scammer>
  me?: Maybe<User>
  userAmount: Scalars["Int"]
  getUserByUuid: User
}

export type QueryPitInventoryArgs = {
  uuid: Scalars["String"]
}

export type QueryGetUserByUuidArgs = {
  uuid: Scalars["String"]
}

export type PitInventory = {
  player: Array<InventoryItem>
  enderChest: Array<InventoryItem>
  stash: Array<InventoryItem>
  armor: Array<InventoryItem>
  mysticWell?: Maybe<Array<InventoryItem>>
}

export type InventoryItem = {
  slot: Scalars["Int"]
  itemId?: Maybe<Scalars["Int"]>
  dye?: Maybe<Scalars["Int"]>
  enchants: Array<Enchant>
}

export type Enchant = {
  name: Scalars["String"]
  description: Array<Scalars["String"]>
  level: Scalars["Int"]
}

export type Scammer = {
  id: Scalars["Int"]
  uuid: Scalars["String"]
  createdAt: Scalars["DateTime"]
  discordIds: Array<ScammerDiscordId>
  evidence: Array<ScammerEvidence>
  reason: Scalars["String"]
}

export type ScammerDiscordId = {
  id: Scalars["Int"]
  discordId: Scalars["String"]
  userId: Scalars["Float"]
}

export type ScammerEvidence = {
  id: Scalars["Int"]
  value: Scalars["String"]
  userId: Scalars["Float"]
}

export type User = {
  id: Scalars["Int"]
  minecraftAccount?: Maybe<MinecraftAccount>
  trades: Array<Trade>
}

export type MinecraftAccount = {
  uuid: Scalars["String"]
  username: Scalars["String"]
  verificationToken: Scalars["String"]
}

export type Trade = {
  id: Scalars["Float"]
  endUser: User
  isCompleted: Scalars["Boolean"]
}

export type Mutation = {
  createTrade: Trade
  login: AuthResponse
  logout: Scalars["Boolean"]
  registerUser: AuthResponse
  resetPassword: ResetPasswordResponse
}

export type MutationCreateTradeArgs = {
  data: CreateTradeInput
}

export type MutationLoginArgs = {
  data: AuthArgs
}

export type MutationRegisterUserArgs = {
  data: AuthArgs
}

export type MutationResetPasswordArgs = {
  email: Scalars["String"]
}

export type CreateTradeInput = {
  endUserAccountUuid: Scalars["String"]
  userTrade: Scalars["String"]
  endUserTrade: Scalars["String"]
}

export type AuthResponse = {
  successful: Scalars["Boolean"]
  user?: Maybe<User>
  error?: Maybe<AuthorizationError>
}

export type AuthorizationError = {
  object: Scalars["String"]
  message?: Maybe<Scalars["String"]>
}

export type AuthArgs = {
  email: Scalars["String"]
  password: Scalars["String"]
}

export type ResetPasswordResponse = {
  successful: Scalars["Boolean"]
  errorMessage?: Maybe<Scalars["String"]>
}

export type ContentsFragment = Pick<
  InventoryItem,
  "slot" | "itemId" | "dye"
> & { enchants: Array<Pick<Enchant, "name" | "description" | "level">> }

export type LoginMutationVariables = Exact<{
  email: Scalars["String"]
  password: Scalars["String"]
}>

export type LoginMutation = {
  login: Pick<AuthResponse, "successful"> & {
    error?: Maybe<Pick<AuthorizationError, "object" | "message">>
  }
}

export type RegisterUserMutationVariables = Exact<{
  email: Scalars["String"]
  password: Scalars["String"]
}>

export type RegisterUserMutation = {
  registerUser: Pick<AuthResponse, "successful"> & {
    error?: Maybe<Pick<AuthorizationError, "object" | "message">>
  }
}

export type ResetPasswordMutationVariables = Exact<{
  email: Scalars["String"]
}>

export type ResetPasswordMutation = {
  resetPassword: Pick<ResetPasswordResponse, "successful" | "errorMessage">
}

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { me?: Maybe<Pick<User, "id">> }

export type PitInventoryQueryVariables = Exact<{
  uuid: Scalars["String"]
}>

export type PitInventoryQuery = {
  pitInventory?: Maybe<{
    player: Array<ContentsFragment>
    enderChest: Array<ContentsFragment>
    stash: Array<ContentsFragment>
    mysticWell?: Maybe<Array<ContentsFragment>>
  }>
}

export type UserAmountQueryVariables = Exact<{ [key: string]: never }>

export type UserAmountQuery = Pick<Query, "userAmount">

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
`
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      successful
      error {
        object
        message
      }
    }
  }
`
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const RegisterUserDocument = gql`
  mutation RegisterUser($email: String!, $password: String!) {
    registerUser(data: { email: $email, password: $password }) {
      successful
      error {
        object
        message
      }
    }
  }
`
export type RegisterUserMutationFn = Apollo.MutationFunction<
  RegisterUserMutation,
  RegisterUserMutationVariables
>

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >
) {
  return Apollo.useMutation<
    RegisterUserMutation,
    RegisterUserMutationVariables
  >(RegisterUserDocument, baseOptions)
}
export type RegisterUserMutationHookResult = ReturnType<
  typeof useRegisterUserMutation
>
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<
  RegisterUserMutation,
  RegisterUserMutationVariables
>
export const ResetPasswordDocument = gql`
  mutation ResetPassword($email: String!) {
    resetPassword(email: $email) {
      successful
      errorMessage
    }
  }
`
export type ResetPasswordMutationFn = Apollo.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >
) {
  return Apollo.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, baseOptions)
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>
export const MeDocument = gql`
  query Me {
    me {
      id
    }
  }
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions)
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>
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
  ${ContentsFragmentDoc}
`

/**
 * __usePitInventoryQuery__
 *
 * To run a query within a React component, call `usePitInventoryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePitInventoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePitInventoryQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function usePitInventoryQuery(
  baseOptions: Apollo.QueryHookOptions<
    PitInventoryQuery,
    PitInventoryQueryVariables
  >
) {
  return Apollo.useQuery<PitInventoryQuery, PitInventoryQueryVariables>(
    PitInventoryDocument,
    baseOptions
  )
}
export function usePitInventoryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PitInventoryQuery,
    PitInventoryQueryVariables
  >
) {
  return Apollo.useLazyQuery<PitInventoryQuery, PitInventoryQueryVariables>(
    PitInventoryDocument,
    baseOptions
  )
}
export type PitInventoryQueryHookResult = ReturnType<
  typeof usePitInventoryQuery
>
export type PitInventoryLazyQueryHookResult = ReturnType<
  typeof usePitInventoryLazyQuery
>
export type PitInventoryQueryResult = Apollo.QueryResult<
  PitInventoryQuery,
  PitInventoryQueryVariables
>
export const UserAmountDocument = gql`
  query UserAmount {
    userAmount
  }
`

/**
 * __useUserAmountQuery__
 *
 * To run a query within a React component, call `useUserAmountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAmountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAmountQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserAmountQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserAmountQuery,
    UserAmountQueryVariables
  >
) {
  return Apollo.useQuery<UserAmountQuery, UserAmountQueryVariables>(
    UserAmountDocument,
    baseOptions
  )
}
export function useUserAmountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserAmountQuery,
    UserAmountQueryVariables
  >
) {
  return Apollo.useLazyQuery<UserAmountQuery, UserAmountQueryVariables>(
    UserAmountDocument,
    baseOptions
  )
}
export type UserAmountQueryHookResult = ReturnType<typeof useUserAmountQuery>
export type UserAmountLazyQueryHookResult = ReturnType<
  typeof useUserAmountLazyQuery
>
export type UserAmountQueryResult = Apollo.QueryResult<
  UserAmountQuery,
  UserAmountQueryVariables
>
