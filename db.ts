import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

const remote = 'reach out!'

// Initialize Apollo Client
export const client = new ApolloClient({
    uri: remote,
    cache: new InMemoryCache()
});

export const getPlanData = () => {
    return client
        .query({
            query: gql`
      query getPlans {
  plans(where:{id: {equals: "cl1ccg4il01060mwkcejaj5ia"}}) {
    sections {
      id,
      sequence,
      name,
      slides {
        id, 
        sequence,
        image {
          url
        },
        imagePlacement,
        content {
          document
        }
      }
    }
  }
}
    `
        })
}