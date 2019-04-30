<template>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li>
      <input placeholder="What needs to be done?" @keyup.enter="addTodo($event.target.value)">
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos() {
      return this.$store.state.todos.list
    }
  },
  methods: {
    // addTodo (e) {
    //   this.$store.commit('todos/add', e.target.value)
    //   e.target.value = ''
    // },
    // ...mapMutations({
    //   toggle: 'todos/toggle'
    // })
    ...mapMutations({
      addTodo: 'todos/add',
      toggleTodo: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>