<template>
  <div class="container">
    <div class="row justify-content-center pt-5">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div class="form-group row">
              <label for class="col-md-4 col-form-label text-md-right">Email</label>
              <div class="col-md-6">
                <input type="email" class="form-control" autofocus v-model="user.email">
              </div>
            </div>
            <div class="form-group row">
              <label for class="col-md-4 text-md-right">Password</label>
              <div class="col-md-6">
                <input type="text" class="form-control" v-model="user.password">
              </div>
            </div>
            <div class="form-group row justify-content-end">
              <div class="btn btn-primary px-5 mr-5" @click="hanleSubmit">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    hanleSubmit() {
      this.login(this.user).then(() => {
        this.$router.push({ name: 'index' })
      })
    }
  },
  created() {
    console.log('login page')
  }
}
</script>

<style>
</style>
