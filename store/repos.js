// import ReposService from '@/services/ReposService.js'
import { gql } from 'nuxt-graphql-request'

export const state = () => ({
  repos: [],
})
export const mutations = {
  SET_REPOS(state, repos) {
    state.repos = repos
  },
}
export const actions = {
  async fetchRepos({ commit }) {
    // return ReposService.getRepositories().then((response) => {
    //   commit('SET_REPOS', response.data)
    // })
    const query = gql`
      {
        user(login: "rsales") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                url
                name
                description
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                primaryLanguage {
                  id
                  name
                  color
                }
              }
            }
          }
        }
      }
    `

    const repos = await this.$graphql.default.request(query)
    commit('SET_REPOS', repos)
  },
}
