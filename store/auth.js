import { userService } from '../_services'
import Cookie from 'cookie'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

// const user = localStorage.user
//   ? JSON.parse(localStorage.user)
//   : Cookies.get('user')
// const user = Cookies.get('_user') || null

export const state = () => ({
  user: null,
  token: null
})

export const getters = {
  user(state) {
    return state.user
  },
  token(state) {
    return state.token
  }
}

export const mutations = {
  loginSuccess(state, { user, token }) {
    state.user = user
    state.token = token
    Cookies.set('_user', user)
    Cookies.set('_token', token)
  },
  loginFailure(state) {
    state.status = {}
    state.user = null
  },
  logout(state) {
    state.user = null
    state.token = null
    Cookies.remove('_user')
    Cookies.remove('_token')
  },
  registerSuccess(state, { user, token }) {
    state.user = user
    state.token = token
    Cookies.set('_user', user)
    Cookies.set('_token', token)
  },
  registerFailure(state, error) {
    // console.log(state)
    // state.status = {}
  }
}

export const actions = {
  login({ dispatch, commit }, user) {
    return new Promise((resolve, reject) => {
      userService.login(
        user,
        res => {
          const { accessToken: token } = res
          const { payload: userProfile } = jwt.decode(token, { complete: true })
          commit('loginSuccess', { user: userProfile, token })
          resolve()
        },
        error => {
          commit('loginFailure', error)
          reject()
        }
      )
    })
  },
  logout({ commit }) {
    commit('logout')
    // callback()
  },
  register({ dispatch, commit }, user) {
    return new Promise((resolve, reject) => {
      userService.register(
        user,
        res => {
          const { token } = res
          commit('registerSuccess', { user, token })
          resolve()
        },
        err => {
          reject()
          console.log(err)
        }
      )
    })
  },
  nuxtServerInit({ commit }, { req }) {
    // const cookies = new Cookies(req.headers.cookie)
    // const token = cookies.get('token')
    // commit('SET_TOKEN', token);
    console.log('nuxtServerInit')
  }
}
