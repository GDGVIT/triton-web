/* eslint-disable no-console */
export function copyToClipboard(store) {
  const content = store.state.pastes.content.content
  navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
    if (result.state === 'granted' || result.state === 'prompt') {
      navigator.clipboard.writeText(content).then(
        function () {
          console.log('copied to clipboard')
        },
        function () {
          console.error('Unable to copy to clipboard')
        }
      )
    }
  })
}
