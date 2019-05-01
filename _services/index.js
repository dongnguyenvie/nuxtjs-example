import axios from 'axios'
import { axiosConfig } from '../_utils/config'

axiosConfig(axios)

export const userService = {
  register(user, fnRes, fnErr) {
    const { email, password } = user
    axios
      .post('/register', { email: email, password: password })
      .then(res => {
        fnRes(res.data)
      })
      .catch(err => {
        fnErr(err)
      })
  },
  login(user, fnRes, fnErr) {
    const { email, password } = user
    axios
      .post('/login', { email: email, password: password })
      .then(res => {
        fnRes(res.data)
      })
      .catch(err => {
        fnErr(err)
      })
  }
}

export const ApiManager = {
  getTextLorem({ quantity, type = 'array' }, fnRes, fnErr) {
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${quantity}&start-with-lorem=1&format=${type}`
      )
      .then(res => fnRes(res.data))
      .catch(err => fnErr(err))
  }
}
