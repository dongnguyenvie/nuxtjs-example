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
