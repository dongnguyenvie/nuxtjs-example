export const state = () => ({
//   content: ''
})

export const mutations = {
  setContent(state, payload) {
    console.log('runnning......')
    state.content = payload
  }
}

export const actions = {
  async fetchContent({ commit }) {
    const response = await fetch(
      'https://baconipsum.com/api/?type=meat-and-filler'
    )
    const payload = await response.json()
    // console.log(payload)
    commit('setContent', payload)
  }
}
