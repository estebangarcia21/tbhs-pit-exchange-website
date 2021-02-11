import { useMeQuery } from "generated/graphql-types"
import { useRouter } from "next/router"
import { useEffect } from "react"

const useSessionAuth = () => {
  const router = useRouter()

  const { data, loading } = useMeQuery()

  useEffect(() => {
    if (loading || data) return

    router.replace("/login")
  }, [loading, data, router])

  return { isLoading: loading && !data }
}

export default useSessionAuth
