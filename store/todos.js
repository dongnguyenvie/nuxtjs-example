export const state = () => ({
  list: [
    {
      text: 'dongnguyenvie',
      done: false
    }
  ]
})

export const mutations = {
  add(state, text) {
    console.log('input', $nuxt)
    state.list.push({
      done: false,
      text
    })
  },
  remove(state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}
