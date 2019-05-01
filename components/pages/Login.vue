<template>
  <div class="container">
    <div class="row justify-content-center pt-5" @keyup.enter="hanleSubmit()">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <div class="form-group row">
              <label for class="col-md-4 col-form-label text-md-right">Email</label>
              <div class="col-md-6">
                <input type="email" class="form-control" autofocus v-model="user.email">
              </div>
              <div class="col-md-6 offset-md-4">
                <div class="error" v-if="$v.user.email.$error">Field is required or invalid format</div>
              </div>
            </div>
            <div class="form-group row">
              <label for class="col-md-4 text-md-right">Password</label>
              <div class="col-md-6">
                <input type="password" class="form-control" v-model="user.password">
              </div>
              <div class="col-md-6 offset-md-4">
                <div class="error" v-if="$v.user.password.$error">Field is required.</div>
              </div>
            </div>
            <div class="form-group row justify-content-end">
              <div class="btn btn-primary px-5 mr-5" @click="hanleSubmit">Submit</div>
            </div>
            <div class="alert alert-danger" v-if="error">Account is incorrect</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      error: false
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    hanleSubmit() {
      this.$v.$touch()
      if (this.$v.$error) return
      this.login(this.user)
        .then(() => {
          this.$router.push({ name: 'index' })
        })
        .catch(err => {
          this.error = true
        })
    }
  },
  created() {
    // console.log('login page')
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  }
}
</script>

<style>
</style>
