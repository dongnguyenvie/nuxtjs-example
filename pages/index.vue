<template>
  <div class="container pt-4">
    <div class="card">
      <div class="card-header">
        <div v-if="getUser" class="d-flex justify-content-between">
          <h1>Hello, {{getUser.name}}</h1>
          <button class="btn btn-danger px-5" @click="logout">Logout</button>
        </div>
        <div v-else class="d-flex justify-content-between">
          <h1>You are not logged in</h1>
          <button class="btn btn-primary px-5" @click="login">Login</button>
        </div>
      </div>
      <div class="card-body">
        <img src="https://picsum.photos/id/1060/536/354?blur=2" alt>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  head: {
    title: 'This is the about page seo-title',
    meta: [
      {
        hid: 'description seo-hid',
        name: 'description seo-name',
        content: 'My about page seo-conent'
      }
    ]
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      getUser: 'auth/user',
      getToken: 'auth/token'
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
    login() {
      this.$router.push({ name: 'login' })
    }
  },
  created() {
    // console.log('home', this.$store.state.auth.token)
  },
  middleware: ['checkLogin']
}
</script>
