<template>
  <div>
    <div>
      <button
        aria-label="Copy"
        v-if="
          !$store.state.pastes.isEdit &&
          $route.name !== 'index' &&
          $route.name !== 'about'
        "
        class="h-6 w-6 cursor-pointer fill-current text-white mr-4 hover:text-amber copy-btn"
        viewBox="0 0 24 24"
        @click="handleCopy"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
          />
        </svg>
      </button>
    </div>
    <div
      class="flex px-4 py-1 text-xs sm:text-base justify-between text-amber"
      style="background: #1a1a1a; font-family: JetbrainsMono"
    >
      <a href="https://sphericalkat.dev"
        ><span>© {{ new Date().getFullYear() }} SphericalKat</span></a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomFooter',
  methods: {
    handleCopy() {
      var d = document.getElementsByTagName('code')[0].innerHTML
      d = d.replace(/<\/?span[^>]*>/g, '')
      navigator.permissions
        .query({ name: 'clipboard-write' })
        .then((result) => {
          if (result.state == 'granted' || result.state == 'prompt') {
            navigator.clipboard.writeText(d).then(
              function () {
                console.log("copied to clipboard")
              },
              function () {
                console.error("Unable to copy to clipboard")
              }
            )
          }
        })
    },
  },
}
</script>

<style scoped>
.copy-btn {
  z-index: 1;
  position: absolute;
  bottom: -1;
  right: 0;
}
</style>