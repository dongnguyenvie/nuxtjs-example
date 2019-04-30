import Cookies from 'js-cookie'
import Cookie from 'cookie'
import _ from 'lodash'

const pagePublic = ['login', 'index']

export default function({ store, redirect, req, next, app, route, error }) {
  const { _token, _user } = Cookie.parse(req.headers.cookie)
  if (_.includes(pagePublic, route.name)) {
    if (!_token) {
      return redirect('/home')
    }
  }
}
