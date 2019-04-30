import Cookies from 'js-cookie'
import Cookie from 'cookie'
import _ from 'lodash'

const pagePublic = ['login', 'index']

export default function({ store, redirect, req, next, app, route }) {
  if (_.includes(pagePublic, route.name)) {
    if (store.getters['auth/token']) {
      return redirect('/')
    }
  }
}
