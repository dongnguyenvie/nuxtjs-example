// import Cookies from 'js-cookie'
import Cookie from 'cookie'

export default function({ store, redirect, req, next, app, route }) {
  if (process.server) {
    const { _token, _user } = Cookie.parse(req.headers.cookie)
    if (_token) {
      const user = JSON.parse(_user)
      const token = _token
      store.commit('auth/loginSuccess', { user, token })
    }
  }
}
