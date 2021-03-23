import { ActionTree, MutationTree } from 'vuex'
import { gql } from 'graphql-request'

export const state = () => ({
  posts: [] as object[],
  post: {} as object,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_POSTS(state, posts) {
    state.posts = posts
  },
  SET_POST(state, post) {
    state.post = post
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchPosts({ commit }) {
    const query = gql`
      query {
        blogPostCollection {
          total
          skip
          limit
          items {
            title
            slug
            resume
            datetime
            portugueses
          }
        }
      }
    `
    const posts = await this.$graphql.contentfulClient
      .setHeaders({ authorization: `Bearer ${process.env.ctfCdaAccessToken}` })
      .request(query)
    commit('SET_POSTS', posts.blogPostCollection.items)
  },

  async fetchPost({ commit }, slug) {
    const query = gql`
      query {
        blogPostCollection(where: { OR: { slug: "${slug}" } }) {
          items {
            title
            slug
            resume
            contents
            datetime
            portugueses
            imagePost {
              title
              url
            }
          }
        }
      }
    `
    const post = await this.$graphql.contentfulClient
      .setHeaders({ authorization: `Bearer ${process.env.ctfCdaAccessToken}` })
      .request(query)
    commit('SET_POST', post.blogPostCollection.items[0])
  },
}
