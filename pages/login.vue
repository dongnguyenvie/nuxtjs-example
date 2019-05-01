<template>
  <div>
    <Login/>
  </div>
</template>

<script>
import Login from '~/components/pages/Login.vue'

export default {
  head: {
    title: 'Coders-tokyo || login page',
    meta: [
      {
        hid: 'this is nuxjs project example',
        name: 'this is nuxjs project example',
        content: 'GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together. ... nuxt web-app isomorphic vue universal ssr pwa vuex vue-router. ... Nuxt.js Hacker News.'
      }
    ]
  },
  components: {
    Login
  },
  middleware: ['auth']
}
</script>

<style>
</style>
