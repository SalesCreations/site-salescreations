import { gql, GraphQLClient } from 'graphql-request'

export default {
  async getProjects() {
    const query = gql`
      query {
        projectsCollection {
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

    const projects: object[] = await client.request(query).then((data) => {
      return data.projectsCollection.items
    })

    return projects
  },
}
