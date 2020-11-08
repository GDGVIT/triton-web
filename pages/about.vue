<template>
  <div class="root flex flex-col h-screen">
    <Navbar is-about />
    <div class="p-4 h-full">
      <h1 class="text-title sm:pr-64">
        katbin - the cutest pastebin and URL shortener ever!
      </h1>
      <p class="text-body sm:pr-64">
        Sharing short code samples, logs or links is now easier than ever!
      </p>
      <br />
      <h1 class="text-title sm:pr-64">Basics</h1>
      <p class="text-body sm:pr-64">
        The easiest way to use katbin, is from inside your browser. Type or
        paste your content into the text area on the homepage, save it, and copy
        the link. You can now share this link with whoever you want.
      </p>
      <p class="text-body sm:pr-64">
        If you want to create a short url from a link, simply paste the link in
        the text field. You can now copy the resulting link and it will
        automatically redirect everyone.
      </p>
      <br />
      <h1 class="text-title sm:pr-64">Editing</h1>
      <p class="text-body sm:pr-64">
        You can edit your documents by clicking the edit button
      </p>
      <p class="text-body sm:pr-64">
        When you create your first document we will automatically create an
        (anonymous) account for you, so you will be able to edit your documents
        for as long as you keep our cookie. If you want a more permanent way to
        keep your pastes and edit them from multiple devices you can create an
        account. Pastes which you created before signing up will be
        automatically transferred to your account.
      </p>
      <br />
      <h1 class="text-title sm:pr-64">Document lifetime</h1>
      <p class="text-body sm:pr-64">
        There is no explicit expiration time for documents on katbin. Documents
        may however be removed at any time without notice.
      </p>
      <br />
      <h1 class="text-title sm:pr-64">Open source</h1>
      <p class="text-body sm:pr-64">
        katbin is fully open source and built on open source technology. All
        sources can be found on
        <a
          class="underline hover:text-amber cursor-pointer"
          href="https://github.com/SphericalKat"
          >GitHub</a
        >. You can easily deploy it yourself wherever you want.
      </p>
      <br />
      <h1 class="text-title sm:pr-64">Contact</h1>
      <p class="text-body sm:pr-64">
        You can contact sphericalkat
        <a
          class="underline hover:text-amber cursor-pointer"
          href="https://t.me/sphericalkat"
          >here</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
.root {
  font-family: 'JetbrainsMono', Courier, monospace;
  color: white;
  font-display: swap;
}

.text-title {
  @apply text-xl pb-2 pr-8 text-amber;
}

.text-body {
  @apply text-sm text-body pb-2 pr-8;
  color: #fafafac2;
}
</style>
