export const state = () => ({
  textInput: '',
})

export const mutations = {
  set(state, text) {
    state.textInput = text
  },
}
