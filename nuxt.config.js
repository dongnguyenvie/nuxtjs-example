import pkg from './package'
require('dotenv').config()

const environment = {
  API_URL: '[http://dummy.restapiexample.com/api/v1]'
}
console.log(environment.API_URL);
export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuelidate.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options,
    // baseURL: environment.API_URL,
    // credentials: true,
    // proxy: false,
    // debug: true,
    // retry: {
    //   retries: 3
    // },
    // requestInterceptor: (config, {store}) => {
    //   config.headers.common['Authorization'] = '';
    //   config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;application/json';
    //   return config
    // }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  server: {
    port: process.env.PORT || 3333, // default: 3000
//    host: process.env., // default: localhost
  },
}
