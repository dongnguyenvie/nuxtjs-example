
// const API_BASE_URL = 'https://reqres.in/api'
const API_BASE_URL = 'https://crawl-ytb.herokuapp.com/api/v1'
const axiosConfig = (axios) => {
    axios.defaults.baseURL = API_BASE_URL
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.interceptors.request.use(
      config => {
        // const client = clientStorage.get()
        // if (client) {
        //   const {id} = client
        //   console.log('axiosConfig', client)
        //   config.headers['x-cbpo-client-id'] = id
        // }
        return config
      },
      err => Promise.reject(err)
    )
  }
  export { axiosConfig }