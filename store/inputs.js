export const state = () => ({
  textInput: '',
  textEdit: '',
})

export const mutations = {
  set(state, text) {
    state.textInput = text
  },

  setTextEdit(state, text) {
    state.textEdit = text
  },
}
