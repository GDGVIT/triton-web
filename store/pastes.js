export const state = () => ({
  pasteUser: '',
  currentUser: null,
  content: '',
  isEdit: false,
})

export const mutations = {
  setPasteUser(state, user) {
    state.pasteUser = user
  },

  setCurrentUser(state, user) {
    state.currentUser = user
  },

  setContent(state, newContent) {
    state.content = newContent
  },

  setContentText(state, newContentText) {
    state.content.content = newContentText
  },

  setIsEdit(state, newIsEdit) {
    state.isEdit = newIsEdit
  },
}
