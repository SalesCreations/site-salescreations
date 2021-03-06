import ShotService from '@/services/ShotService.js'
import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  shots: [] as object[],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_SHOTS(state, skills: object[]) {
    state.shots = skills
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchShots({ commit }) {
    return await ShotService.getSkills().then((response) => {
      commit('SET_SHOTS', response.data)
    })
  },
}
