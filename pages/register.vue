<template>
  <div class="container">
    <div class="row justify-content-center pt-5">
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
      flag: false,
      rePassword: ''
    }
  },
  methods: {
    ...mapActions({
      actionRegister: 'auth/register'
    }),
    hanleSubmit() {
      const { email, password } = this.user
      this.$v.$touch()
      console.log(this.$v.$error)
      if (this.$v.$error) return
      if (password !== this.rePassword) {
        this.flag = true
      }
      this.actionRegister(this.user).then(e => {
        this.$router.push({ name: 'home' })
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
  },
  created() {
    this.$store.state.auth.token = 14
  },
  middleware: 'auth'
}
</script>

<style>
.error {
  font-size: 0.75rem;
  /* line-height: 1; */
  display: none;
  /* margin-left: 14px; */
  /* margin-top: -1.6875rem; */
  /* margin-bottom: 0.9375rem; */
  display: block;
  color: #f57f6c;
}
</style>
