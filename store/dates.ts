import { ActionTree, MutationTree } from 'vuex'
import { gql } from 'graphql-request'
import { timelineCollectionItem } from '@/plugins/types'

export const state = () => ({
  dates: [] as timelineCollectionItem[],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_DATES(state, dates: timelineCollectionItem[]) {
    state.dates = dates
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchDates({ commit }, limit) {
    const query = gql`
      query {
        timelineCollection(limit: ${limit}, order: datetime_DESC) {
          total
          skip
          limit
          items {
            title
            description
            datetime
          }
        }
      }
    `
    const dates = await this.$graphql.contentfulClient
      .setHeaders({ authorization: `Bearer ${process.env.ctfCdaAccessToken}` })
      .request(query)
    commit('SET_DATES', dates.timelineCollection.items)
  },
}
