<template>
  <div class="container">
    <div class="alert alert-primary">
      <h1>Hello, {{getUser.name}}</h1>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
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
    })
  },
  created() {
    console.log('home', this.$store.state.auth.token)
  },
  middleware: ['checkLogin']
}
</script>
