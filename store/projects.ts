import { ActionTree, MutationTree } from 'vuex'
import { gql } from 'graphql-request'
import { ProjectsCollectionItem, Project } from '@/plugins/types'

export const state = () => ({
  projects: [] as ProjectsCollectionItem[],
  project: {} as Project,
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_PROJECTS(state, projects: ProjectsCollectionItem[]) {
    state.projects = projects
  },
  SET_PROJECT(state, project: Project) {
    state.project = project
  },
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

  async fetchProject({ commit }, slug) {
    const query = gql`
      query {
        projectsCollection(where: { OR: { slug: "${slug}" } }) {
          items {
            title
            slug
            cover {
              title
              url
            }
            company
            team
            tools
            roles
            year
            content
            resume
          }
        }
      }
    `
    const project = await this.$graphql.contentfulClient
      .setHeaders({ authorization: `Bearer ${process.env.ctfCdaAccessToken}` })
      .request(query)
    commit('SET_PROJECT', project.projectsCollection.items[0])
  },
}
