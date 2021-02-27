import ReposService from '@/services/ReposService.js'

export const state = () => ({
  repos: [],
})
export const mutations = {
  SET_REPOS(state, repos) {
    state.repos = repos
  },
}
export const actions = {
  fetchRepos({ commit }) {
    return ReposService.getRepositories().then((response) => {
      commit('SET_REPOS', response.data)
    })
  },
}
