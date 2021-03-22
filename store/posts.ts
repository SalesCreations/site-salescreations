import { ActionTree, MutationTree } from 'vuex'
import { gql } from 'graphql-request'

export const state = () => ({
  posts: [] as object[],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_POSTS(state, posts: object[]) {
    state.posts = posts
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchPosts({ commit }) {
    const query = gql`
      query {
        blogPostCollection {
          total
          items {
            title
            resume
            datetime
            portugueses
            slug
          }
        }
      }
    `
    const posts = await this.$graphql.contentfulClient
      .setHeaders({ authorization: `Bearer ${process.env.ctfCdaAccessToken}` })
      .request(query)
    commit('SET_POSTS', posts)
  },
}
