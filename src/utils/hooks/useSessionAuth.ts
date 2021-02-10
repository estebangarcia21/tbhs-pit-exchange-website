import { MeDocument, MeQuery, MeQueryVariables } from "generated/graphql-types"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { serverClient } from "../server-client"

export const useSessionAuth = () => {
    const router = useRouter()

    const { data, isLoading } = useQuery(
        "me",
        async () =>
            await serverClient.request<MeQuery, MeQueryVariables>(MeDocument)
    )

    useEffect(() => {
        if (!isLoading && !data?.me) {
            router.replace("/login")
        }
    }, [isLoading, data, router])

    return { isLoading: isLoading && !data }
}
