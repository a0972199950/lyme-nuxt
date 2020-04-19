import { GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex'

interface IState {
  username: string
}

export const state = (): IState => ({
  username: null
})


export const getters: GetterTree<IState, IState> = {
}

export const mutations: MutationTree<IState> = {
  SET_USERNAME (state: IState, username: string) {
    state.username = username
  }
}

export const actions: ActionTree<IState, IState> = {
  
}