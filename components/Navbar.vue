<template>
  <nav
    class="nav-bg font-sans flex items-center justify-between flex-wrap py-3 px-6"
  >
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <nuxt-link to="/">
        <span class="font-semibold text-xl tracking-tight"
          ><span class="text-amber">&lt;Kat</span>bin/&gt;</span
        >
      </nuxt-link>
    </div>
    <div class="block sm:hidden">
      <svg
        v-if="showSave"
        class="h-8 w-8 cursor-pointer fill-current text-white hover:text-amber"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        @click="handleSave"
      >
        <path
          d="M17.6 3.6c-.4-.4-.9-.6-1.4-.6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.8c0-.5-.2-1-.6-1.4l-2.8-2.8zM12 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z"
        />
      </svg>
    </div>
    <div
      :class="open ? 'block' : 'hidden'"
      class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
    >
      <div class="text-base sm:text-sm sm:flex-grow">
        <a
          href="#about"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-amber mr-4"
        >
          About
        </a>
        <a
          href="#changelog"
          class="no-underline block mt-4 sm:inline-block sm:mt-0 text-white hover:text-amber mr-4"
        >
          Changelog
        </a>
      </div>
      <div>
        <svg
          v-if="showSave"
          class="h-8 w-8 cursor-pointer fill-current text-white hover:text-amber"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          @click="handleSave"
        >
          <path
            d="M17.6 3.6c-.4-.4-.9-.6-1.4-.6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.8c0-.5-.2-1-.6-1.4l-2.8-2.8zM12 19c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>

<script>
const validURL = (str) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  return !!pattern.test(str)
}

export default {
  name: 'Navbar',
  props: {
    showSave: Boolean,
  },
  data() {
    return {
      open: false,
      inputPaste: '',
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
    async handleSave() {
      if (this.$store.state.inputs.textInput !== '') {
        try {
          const content = this.$store.state.inputs.textInput
          const isUrl = validURL(content)
          const { paste_id: pasteId } = await this.$axios.$post(
            'https://api.katb.in/api/paste',
            {
              is_url: isUrl,
              content,
            }
          )

          this.$router.push({ path: `${isUrl ? 'v/' : ''}${pasteId}` })
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err)
        }
      }
    },
  },
}
</script>

<style scoped>
.nav-bg {
  background: #1a1a1a;
  font-family: 'JetbrainsMono', Courier, monospace;
}
</style>
