<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <code
      v-if="!$store.state.pastes.isEdit"
      v-highlight="$store.state.pastes.content.content"
      class="break-word pl-4 h-full"
    ></code>
    <textarea
      v-else
      v-model="textEdit"
      spellcheck="false"
      class="h-full px-6 py-4 outline-none"
    ></textarea>
    <CustomFooter />
  </div>
</template>

<script>
export default {
  async fetch() {
    const { params, $axios, redirect, store } = this.$nuxt.context
    const paste = params.urlpaste
    if (params.v === 'v') {
      try {
        const pasteContent = await $axios.$get(
          `https://api.katb.in/api/paste/${paste}`,
          { withCredentials: true }
        )

        if (pasteContent.is_url) {
          redirect(pasteContent.content)
        }

        store.commit('pastes/setContent', pasteContent)
      } catch (err) {
        redirect('/')
      }
    } else {
      redirect('/')
    }
  },

  computed: {
    textEdit: {
      get() {
        return this.$store.state.pastes.content.content
      },

      set(value) {
        this.$store.commit('pastes/setContentText', value)
      },
    },
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
:root {
  background: #212121;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-corner,
::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  @apply bg-amber;
}

.hljs {
  white-space: pre;
  overflow-y: scroll;
  overflow: auto;
  background: #212121;
  overflow-wrap: break-word;
  padding-left: 2rem;
  padding-top: 1rem;
  font-family: 'JetbrainsMono', Courier, monospace;
  font-size: 14px;
}
</style>
