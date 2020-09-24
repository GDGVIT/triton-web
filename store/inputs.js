export const state = () => ({
  textInput: 'd',
})

export const mutations = {
  set(state, text) {
    state.textInput = text
  },
}
