<template>
  <div
    class="flex px-4 py-1 justify-between text-amber"
    style="background: #1a1a1a; font-family: JetbrainsMono"
  >
    <a href="https://sphericalkat.dev"
      ><span>© {{ new Date().getFullYear() }} SphericalKat</span></a
    >
  </div>
</template>

<script>
export default {
  name: 'CustomFooter',
}
</script>
