// import SkillService from '@/services/SkillService.js'
import { ActionTree, MutationTree } from 'vuex'
import { gql } from 'graphql-request'

export const state = () => ({
  skills: [] as object[],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_SKILLS(state, skills: object[]) {
    state.skills = skills
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchSkills({ commit }) {
    // return SkillService.getSkills().then((response) => {
    //   commit('SET_SKILLS', response.data)
    // })

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

    this.$graphql.contentfulClient.setHeaders({ authorization: `Bearer ${process.env.CTF_CDA_ACCESS_TOKEN}` })
    const skills = await this.$graphql.contentfulClient.request(query)
    commit('SET_SKILLS', skills)
  },
}
