<template>
  <div>
    <Login/>
  </div>
</template>

<script>
import Login from '~/components/pages/Login.vue'

export default {
  components: {
    Login
  },
  middleware: ['checkLogin', 'auth']
}
</script>

<style>
</style>
