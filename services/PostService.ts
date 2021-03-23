import { gql, GraphQLClient } from 'graphql-request'

export default {
  async getPosts() {
    const query = gql`
      query {
        blogPostCollection {
          items {
            slug
          }
        }
      }
    `
    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CTF_SPACE_ID}`
    const client = new GraphQLClient(endpoint, {
      headers: { authorization: `Bearer ${process.env.CTF_CDA_ACCESS_TOKEN}` },
    })

    const posts: object[] = await client.request(query).then((data) => {
      return data.blogPostCollection.items
    })

    return posts
  },
}
