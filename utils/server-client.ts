import { GraphQLClient } from "graphql-request";

export const serverClient = new GraphQLClient(process.env.NEXT_PUBLIC_API_URL, {
    credentials: "include",
});
