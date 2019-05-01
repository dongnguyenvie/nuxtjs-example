<template>
  <div class="container">
    <h1>This is admin page</h1>
    <p>Below is your data in raw form</p>
    <figure class="highlight">
      <template>
        <pre>
                    <code>
{{formatJsonSeed}}
                    </code>
                </pre>
      </template>
    </figure>
    <div>
      <button class="btn btn-primary px-5" @click="$router.push({name: 'index'})">Back to Home</button>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'Coders-tokyo || admin page',
    meta: [
      {
        hid: 'this is nuxjs project example',
        name: 'this is nuxjs project example',
        content:
          'GitHub is home to over 36 million developers working together to host and review code, manage projects, and build software together. ... nuxt web-app isomorphic vue universal ssr pwa vuex vue-router. ... Nuxt.js Hacker News.'
      }
    ]
  },
  middleware: ['admin'],
  computed: {
    formatJsonSeed() {
      if (this.$store.state.auth.token !== null) {
        return JSON.stringify(this.$store.state.auth.user, undefined, 4)
      }
      return null
    }
  }
}
</script>
<style>
.highlight {
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #f7f7f9;
  border: 1px solid #b7b5b5;
}
</style>
