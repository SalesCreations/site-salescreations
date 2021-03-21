import { ActionTree, MutationTree } from 'vuex'
import { gql } from 'graphql-request'

export const state = () => ({
  repos: [] as object[],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_REPOS(state, repos: object[]) {
    state.repos = repos
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchRepos({ commit }) {
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
    const repos = await this.$graphql.githubClient.setHeaders({ authorization: `Bearer ${process.env.ghToken}` }).request(query)
    commit('SET_REPOS', repos)
  },
}
