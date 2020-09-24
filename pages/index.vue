<template>
  <div class="flex flex-col h-screen">
    <Navbar show-save />
    <textarea
      v-model="textInput"
      spellcheck="false"
      class="h-full px-6 py-4 outline-none"
      placeholder="> Paste, save, share! (Pasting just a URL will shorten it!)"
    ></textarea>
    <CustomFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInput: '',
    }
  },

  watch: {
    textInput(newValue, oldValue) {
      this.$store.commit('inputs/set', this.textInput)
    },
  },
}
</script>

<style scoped>
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
