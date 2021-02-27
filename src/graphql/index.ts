import { ApolloClient, InMemoryCache, gql, QueryOptions } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
  
})

export const fetchCategories = async () => {
  const options = {
    query: gql`
      query {
        categories
      }
    `
  } as QueryOptions

  return client.query(options)
    .then((res) => res.data)
}

export const fetchJoke = async (category: string) => {
  console.log('category >>', category)
  const options = {
    query: gql`
      query {
        joke(category: "${category}") {
          value
          id
          icon_url
          created_at
          categories
        }
      }
    `
  } 

  return client.query(options)
    .then((res) => res.data)
}
