import PhotoService from '@/services/PhotoService.js'
import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  photos: [] as object[],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_PHOTOS(state, photos: object[]) {
    state.photos = photos
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchPhotos({ commit }) {
    return await PhotoService.getPhotos().then((response) => {
      commit('SET_PHOTOS', response.data)
    })
  },
}
