import SkillService from '@/services/SkillService.js'

export const state = () => ({
  skills: [],
})
export const mutations = {
  SET_SKILLS(state, skills) {
    state.skills = skills
  },
  SET_SKILL(state, skill) {
    state.skill = skill
  },
}
export const actions = {
  fetchSkills({ commit }) {
    return SkillService.getSkills().then((response) => {
      commit('SET_SKILLS', response.data)
    })
  },
}
