// import Cookies from 'js-cookie'
// import Cookie from 'cookie'
// import _ from 'lodash'

export default function({ store, redirect, req, next, app, route, error }) {
  if (process.server) {
    if (!store.state.auth.token) {
      return redirect('/')
    }
  }
}
