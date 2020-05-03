import { GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex'

export interface IState {
  username: string
  userAvatar: string
}

export const state = (): IState => ({
  username: null,
  userAvatar: null
})


export const getters: GetterTree<IState, IState> = {
}

export const mutations: MutationTree<IState> = {
  SET_USERPROFILE (state: IState, payload: { username: string, userAvatar: string }) {
    const { username, userAvatar } = payload
    state.username = username
    state.userAvatar = userAvatar
  }
}

export const actions: ActionTree<IState, IState> = {
  
}