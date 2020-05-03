import { Middleware, Context } from '@nuxt/types'
import { Store } from 'vuex'
import { IState } from '../store/index'

const chackUserProfileExist: Middleware = (context: Context) => {
  const { redirect, app, route } = context
  const store: Store<IState> = context.store
  const path = route.path

  if(!store.state.username || !store.state.userAvatar) {
    return redirect('/entry')
  }
}

export default chackUserProfileExist