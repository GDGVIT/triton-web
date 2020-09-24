<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <code v-highlight="content" class="break-word pl-4 h-full"></code>
    <CustomFooter />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line require-await
  async asyncData({ params, $axios }) {
    const paste = params.paste
    try {
      const { content, is_url: isUrl } = await $axios.$get(
        `https://katbin.herokuapp.com/api/paste/${paste}`
      )
      return {
        content,
        isUrl,
      }
    } catch (err) {
      return {
        content: '',
        isUrl: false,
      }
    }
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
  font-family: 'JetbrainsMono', Courier, monospace;
  font-size: 0.85em;
}
</style>
