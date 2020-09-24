<template>
  <div class="flex flex-col">
    <Navbar />
    <h1 class="title">{{ paste }}</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line require-await
  async asyncData({ params }) {
    const paste = params.paste
    return {
      paste,
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
</style>
