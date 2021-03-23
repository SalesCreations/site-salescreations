import { ActionTree, MutationTree } from 'vuex'
import { gql } from 'graphql-request'

export const state = () => ({
  skills: [] as object[],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_SKILLS(state, skills) {
    state.skills = skills
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchSkills({ commit }) {
    const query = gql`
      query {
        skillsCollection {
          items {
            title
            description
            link
            sys {
              id
            }
          }
        }
      }
    `
    const skills = await this.$graphql.contentfulClient
      .setHeaders({ authorization: `Bearer ${process.env.ctfCdaAccessToken}` })
      .request(query)
    commit('SET_SKILLS', skills.skillsCollection.items)
  },
}
