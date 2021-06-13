import { ActionTree, MutationTree } from 'vuex'
import { gql } from 'graphql-request'
import { ProjectsCollectionItem } from '@/plugins/types'

export const state = () => ({
  projects: [] as ProjectsCollectionItem[],
  // project: {} as BlogPost,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_PROJECTS(state, projects: ProjectsCollectionItem[]) {
    state.projects = projects
  },
  // SET_POST(state, project: BlogPost) {
  //   state.project = project
  // },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchProjects({ commit }, limit) {
    const query = gql`
      query {
        projectsCollection(limit: ${limit}, order: year_ASC) {
          total
          skip
          limit
          items {
            title
            slug
            resume
            type
            year
            thumbnail {
              title
              url
            }
          }
        }
      }
    `
    const projects = await this.$graphql.contentfulClient
      .setHeaders({ authorization: `Bearer ${process.env.ctfCdaAccessToken}` })
      .request(query)
    commit('SET_PROJECTS', projects.projectsCollection.items)
  },

  // async fetchPost({ commit }, slug) {
  //   const query = gql`
  //     query {
  //       blogPostCollection(where: { OR: { slug: "${slug}" } }) {
  //         items {
  //           title
  //           slug
  //           resume
  //           contents
  //           datetime
  //           portugueses
  //           imagePost {
  //             title
  //             url
  //           }
  //         }
  //       }
  //     }
  //   `
  //   const post = await this.$graphql.contentfulClient
  //     .setHeaders({ authorization: `Bearer ${process.env.ctfCdaAccessToken}` })
  //     .request(query)
  //   commit('SET_POST', post.blogPostCollection.items[0])
  // },
}
