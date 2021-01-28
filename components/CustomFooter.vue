<template>
  <div>
    <div
      v-if="
        !$store.state.pastes.isEdit &&
        $route.name !== 'index' &&
        $route.name !== 'about'
      "
      class="copy-bg sm:hidden"
    >
      <button
        v-if="
          !$store.state.pastes.isEdit &&
          $route.name !== 'index' &&
          $route.name !== 'about'
        "
        aria-label="Copy"
        class="h-6 w-6 cursor-pointer fill-current text-white mr-4 copy-btn"
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
      <a href="https://dscvit.com"
        ><span>© {{ new Date().getFullYear() }} DSC-VIT</span></a
      >
      <a
        v-if="slug != ''"
        :href="`https://simpleanalytics.com/dscv.it/${slug}`"
      >
        Simple analytics
      </a>
    </div>
  </div>
</template>

<script>
import { copyToClipboard } from '~/plugins/clipboard'

export default {
  name: 'CustomFooter',
  props: {
    slug: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleCopy() {
      copyToClipboard(this.$store)
    },
  },
}
</script>

<style scoped>
.copy-btn {
  z-index: 1;
  margin: 12px;
  position: absolute;
}
.copy-bg {
  z-index: 1;
  margin-bottom: 32px;
  margin-right: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 48px;
  width: 48px;
  border-radius: 48px;
  border: none;
  background-color: #ff9800;
}
</style>
