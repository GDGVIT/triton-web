<template>
  <div class="root flex flex-col h-screen">
    <Navbar is-about />
    <div class="p-4 h-full">
      <h1 class="text-title sm:pr-64">
        Triton - DSC VIT's pastebin and URL shortener
      </h1>
      <p class="text-body sm:pr-64">
        Sharing short code samples, logs or links is now easier than ever!
      </p>
      <br />
      <h1 class="text-title sm:pr-64">Basics</h1>
      <p class="text-body sm:pr-64">
        The easiest way to use triton, is from inside your browser. Type or
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
      <h1 class="text-title sm:pr-64">Markdown support</h1>
      <p class="text-body sm:pr-64">
        We support markdown documents formatting in the CommonMark spec. Append
        ".md" to the end of the url to render any paste as markdown.
      </p>
      <br />
      <h1 class="text-title sm:pr-64">Analytics</h1>
      <p class="text-body sm:pr-64">
        We support per-page analytics using a privacy-friendly analytics
        provider,
        <a
          class="underline text-amber cursor-pointer"
          href="https://simpleanalytics.com"
          >Simple Analytics</a
        >
      </p>
      <br />
      <h1 class="text-title sm:pr-64">Document lifetime</h1>
      <p class="text-body sm:pr-64">
        There is no explicit expiration time for documents on triton. Documents
        may however be removed at any time without notice.
      </p>
      <br />
      <h1 class="text-title sm:pr-64">Open source</h1>
      <p class="text-body sm:pr-64">
        triton is fully open source and built on open source technology. All
        sources can be found on
        <a
          class="underline text-amber cursor-pointer"
          href="https://github.com/GDGVIT/triton-web"
          >GitHub</a
        >. You can easily deploy it yourself wherever you want.
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
