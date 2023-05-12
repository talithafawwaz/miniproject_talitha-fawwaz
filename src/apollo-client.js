import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient ({
    uri: 'https://ahailearn.hasura.app/v1/graphql' ,
    cache: new InMemoryCache(), //menambahkan cache
    headers: {
       'x-hasura-admin-secret': 'zW3CsGqB0DHpI11M63sxvJ24tSliiO740L4eRiHo40pajGHGgRy2OuDSPsaS0MnB'
    }
})

export default client