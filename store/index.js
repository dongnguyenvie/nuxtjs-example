import Cookie from 'cookie'

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { req }) {
    if (process.server) {
      if (typeof req.headers.cookie === 'string') {
        const { _token, _user } = Cookie.parse(req.headers.cookie)
        if (_token && _user) {
          const user = JSON.parse(_user)
          const token = _token
          commit('auth/loginSuccess', { user, token })
        }
      }
    }
  }
}
