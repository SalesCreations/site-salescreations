// import SkillService from '@/services/SkillService.js'
import { gql } from 'nuxt-graphql-request'

export const state = () => ({
  skills: [],
})
export const mutations = {
  SET_SKILLS(state, skills) {
    state.skills = skills
  },
}
export const actions = {
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

    const skills = await this.$graphql.secondClient.request(query)
    commit('SET_SKILLS', skills)
  },
}
