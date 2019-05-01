<template>
  <div>
    <HomeComponent :content="$store.state.home.content"/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import HomeComponent from '~/components/pages/Home.vue'

export default {
  async fetch({ store, params }) {
    await store.dispatch('home/fetchData')
  },
  head: {
    title: 'Coders-tokyo || nuxtjs example',
    meta: [
      {
        hid: 'this is nuxjs project example',
        name: 'this is nuxjs project example',
        content: 'GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together. ... nuxt web-app isomorphic vue universal ssr pwa vuex vue-router. ... Nuxt.js Hacker News.'
      }
    ]
  },
  created() {
    // this.$store.dispatch('home/fetchData')
    // console.log()
  },
  components: {
    HomeComponent
  }
}
</script>
