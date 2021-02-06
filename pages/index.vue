<template>
  <div class="flex flex-col h-screen">
    <Navbar show-save />
    <textarea
      v-model="textInput"
      spellcheck="false"
      class="h-full px-6 py-4 outline-none"
      placeholder="> DSC VIT's Pastebin and URL Shortener. Paste, save and share!"
    ></textarea>
    <CustomFooter />
  </div>
</template>

<script>
export default {
  computed: {
    textInput: {
      get() {
        return this.$store.state.inputs.textInput
      },

      set(value) {
        this.$store.commit('inputs/set', value)
      },
    },
  },
}
</script>

<style>
:root {
  background: #212121;
}

textarea {
  background: #212121;
  color: white;
  font-family: 'JetbrainsMono', Courier, monospace;
  font-size: 14px;
  resize: none;
}
</style>
