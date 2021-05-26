import { ActionTree, MutationTree } from 'vuex'
import { gql } from 'graphql-request'
import { timelineCollectionItem } from '@/plugins/types'

export const state = () => ({
  events: [] as timelineCollectionItem[],
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_EVENTS(state, events: timelineCollectionItem[]) {
    state.events = events
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchEvents({ commit }, limit) {
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
            sys {
              id
            }
          }
        }
      }
    `
    const events = await this.$graphql.contentfulClient
      .setHeaders({ authorization: `Bearer ${process.env.ctfCdaAccessToken}` })
      .request(query)
    commit('SET_EVENTS', events.timelineCollection.items)
  },
}
