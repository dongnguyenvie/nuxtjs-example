<template>
  <main>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in slides"
          :key="`slide-${index}`"
          :class="`carousel-item ${index ===0 && 'active'}`"
        >
          <img class="first-slide" :src="slide.images" alt="First slide">
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>{{slide.title}}</h1>
              <p>{{slide.description}}</p>
              <p>
                <template v-if="!$store.state.auth.token">
                  <a
                    class="btn btn-lg btn-primary"
                    href="#"
                    role="button"
                    @click.prevent="handleRedirectLogin()"
                  >Sign up today</a>
                  <a
                    class="btn btn-lg btn-primary"
                    href="#"
                    role="button"
                    @click.prevent="$router.push({name: 'register'})"
                  >Register</a>
                </template>

                <template v-else>
                  <a
                    class="btn btn-lg btn-primary"
                    href="#"
                    role="button"
                    @click.prevent="handleRedirectAdmin()"
                  >Hi, {{$store.state.auth.user.email}}, Click to admin</a>
                  <a
                    class="btn btn-lg btn-danger"
                    href="#"
                    role="button"
                    @click.prevent="logout()"
                  >Logout</a>
                </template>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </main>
</template>
<script>
export default {
  props: ['slides'],
  methods: {
    handleRedirectLogin() {
      this.$router.push({ name: 'login' })
    },
    handleRedirectAdmin() {
      this.$router.push({ name: 'admin' })
    },
    logout() {
      this.$store.commit('auth/logout')
    }
  }
}
</script>
