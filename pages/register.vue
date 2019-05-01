<template>
  <div class="container">
    <div class="row justify-content-center pt-5" @keyup.enter="hanleSubmit()">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <div class="alert alert-danger" v-if="flag">
              <span>Confirm password does not match</span>
            </div>
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
            <div class="form-group row">
              <label for class="col-md-4 text-md-right">Re-password</label>
              <div class="col-md-6">
                <input type="password" class="form-control" v-model="rePassword">
              </div>
              <div class="col-md-6 offset-md-4">
                <div class="error" v-if="$v.rePassword.$error">Field is required.</div>
              </div>
            </div>
            <div class="form-group row justify-content-end">
              <div class="btn btn-primary px-5 mr-5" @click="hanleSubmit">Submit</div>
            </div>
            <div class="alert alert-danger" v-if="error">Have an error please try again later</div>
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
  head: {
    title: 'Coders-tokyo || register page',
    meta: [
      {
        hid: 'this is nuxjs project example',
        name: 'this is nuxjs project example',
        content: 'GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together. ... nuxt web-app isomorphic vue universal ssr pwa vuex vue-router. ... Nuxt.js Hacker News.'
      }
    ]
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      flag: false,
      rePassword: '',
      error: false
    }
  },
  methods: {
    ...mapActions({
      actionRegister: 'auth/register'
    }),
    hanleSubmit() {
      const { email, password } = this.user
      this.$v.$touch()
      // console.log(this.$v.$error)
      if (this.$v.$error) return
      if (password !== this.rePassword) {
        this.flag = true
      }
      this.actionRegister(this.user)
        .then(e => {
          this.$router.push({ name: 'index' })
        })
        .catch(err => {
          this.error = true
        })
    }
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
    },
    rePassword: {
      required
    }
  }
}
</script>
