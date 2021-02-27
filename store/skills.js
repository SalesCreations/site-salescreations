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

    this.$graphql.contentfulClient.setHeaders({ authorization: `Bearer ${process.env.CTF_CDA_ACCESS_TOKEN}` })
    const skills = await this.$graphql.contentfulClient.request(query)
    commit('SET_SKILLS', skills)
  },
}
