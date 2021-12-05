import { ActionTree, MutationTree } from 'vuex'
import { ProjectsCollectionItem, Project } from '@/plugins/types'
import ProjectService from '@/services/ProjectService'

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
  UPDATE_POST(state, newProject: Project) {
    state.project = newProject
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchProjects({ commit }, path) {
    return await ProjectService.getProjects(path).then((response) => {
      commit('SET_PROJECTS', response.data.stories.slice(1))
    })
  },
  async fetchProject({ commit }, path) {
    return await ProjectService.getProject(path).then((response) => {
      commit('SET_PROJECT', response.data.story)
    })
  },
  async updateProject({ commit }, newPost: object) {
    await commit('UPDATE_POST', newPost)
  },
}
