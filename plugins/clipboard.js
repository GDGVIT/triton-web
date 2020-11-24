export function copyToClipboard() {
  var d = document.getElementsByTagName('code')[0].innerHTML
  d = d.replace(/<\/?span[^>]*>/g, '')
  navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
    if (result.state == 'granted' || result.state == 'prompt') {
      navigator.clipboard.writeText(d).then(
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
