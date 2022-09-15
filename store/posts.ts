import { ActionTree, MutationTree } from 'vuex'
import { BlogPostCollectionItem, BlogPost } from '@/plugins/types'
import PostService from '@/services/PostService'

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
  UPDATE_POST(state, newPost: BlogPost) {
    state.post = newPost
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchPosts({ commit }, path) {
    return await PostService.getPosts(path).then((response) => {
      commit('SET_POSTS', response.data.stories.slice(0, -1))
    })
  },
  async fetchPost({ commit }, path) {
    return await PostService.getPost(path).then((response) => {
      commit('SET_POST', response.data.story)
    })
  },
  async updatePost({ commit }, newPost: object) {
    await commit('UPDATE_POST', newPost)
  },
}
