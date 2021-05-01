import { ActionTree, MutationTree } from 'vuex'
import { gql } from 'graphql-request'
import { BlogPostCollectionItem, BlogPost } from '@/plugins/types'

export const state = () => ({
  posts: [] as BlogPostCollectionItem[],
  post: {} as BlogPost,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_POSTS(state, posts: BlogPostCollectionItem[]) {
    state.posts = posts
  },
  SET_POST(state, post: BlogPost) {
    state.post = post
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchPosts({ commit }, limit) {
    const query = gql`
      query {
        blogPostCollection(limit: ${limit}, order: datetime_DESC) {
          total
          skip
          limit
          items {
            title
            slug
            resume
            contents
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
