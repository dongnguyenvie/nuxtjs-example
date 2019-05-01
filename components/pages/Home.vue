<template>
  <div>
    <!-- header -->
    <Header/>
    <!-- end header -->

    <!-- slide -->
    <Slide :slides="content.slides"/>
    <!-- end slide -->

    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row pt-2">
        <div
          class="col-lg-4 d-flex flex-column align-items-center text-center"
          v-for="(items, index) in content.cicrle"
          :key="`cicrle-${index}`"
        >
          <img
            class="rounded-circle"
            :src="items.images"
            :alt="items.name"
            width="140"
            height="140"
          >
          <h2>{{items.name}}</h2>
          <p>{{items.description}}</p>
          <p>
            <a class="btn btn-secondary" href="#" role="button">View details &raquo;</a>
          </p>
        </div>
      </div>
      <!-- /.row -->
      <!-- START THE FEATURETTES -->
      <template v-for="(items, index) in content.session">
        <hr class="featurette-divider" :key="`session-${index}`">

        <div class="row featurette" :key="index">
          <div :class="`col-md-7 ${index % 2 !== 0 && 'order-md-2'}`">
            <h2 class="featurette-heading">
              {{items.title}}
              <!-- <span class="text-muted">It'll blow your mind.</span> -->
            </h2>
            <p class="lead">{{items.description}}</p>
          </div>
          <div :class="`col-md-5 ${index % 2 !== 0 && 'order-md-1'}`">
            <img
              class="featurette-image img-fluid mx-auto"
              :src="items.images"
              alt="Generic placeholder image"
            >
          </div>
        </div>
      </template>

      <hr>
    </div>

    <!-- footer -->
    <Footer/>
    <!-- end footer -->
  </div>
</template>
<script>
import Header from '../layout/Header.vue'
import Footer from '../layout/Footer.vue'
import Slide from '../layout/Slide.vue'

export default {
  props: ['content'],
  components: {
    Header,
    Footer,
    Slide
  }
}
</script>

<style>
</style>

