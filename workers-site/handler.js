import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

const GITHUB_USERNAME = 'GDGVIT'
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`
const PERMISSIONS_POLICY =
  'accelerometer=(), autoplay=(), camera=(), encrypted-media=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), sync-xhr=(), usb=()'

export async function handleRequest(event) {
  return redirectGitHub(event)
}

async function getPageFromKV(event) {
  const options = {}
  try {
    const page = await getAssetFromKV(event, options)
    if (page === null) {
      throw new Error('No page found, short-circuit to 404 page')
    }
    const response = new Response(page.body, page)
    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Referrer-Policy', 'no-referrer-when-downgrade')
    response.headers.set('Permissions-Policy', PERMISSIONS_POLICY)
    return response
  } catch (e) {
    try {
      const notFoundResponse = await getAssetFromKV(event, {
        mapRequestToAsset: (req) =>
          new Request(`${new URL(req.url).origin}/404.html`, req),
      })
      return new Response(notFoundResponse.body, {
        ...notFoundResponse,
        status: 404,
      })
    } catch (e) { }
    return new Response(e.message || e.toString(), { status: 500 })
  }
}

async function redirectGitHub(event) {
  const urlParts = event.request.url.replace(BASE_URL, '').split('/')
  switch (urlParts[0].toLowerCase()) {
    case 'g':
      switch (urlParts.length) {
        case 1:
          return Response.redirect(GITHUB_URL, 301)
        case 2:
          return Response.redirect(`${GITHUB_URL}/${urlParts[1]}`, 301)
        case 3:
          return Response.redirect(
            `${GITHUB_URL}/${urlParts[1]}/commit/${urlParts[2]}`,
            301
          )
        case 4:
          return Response.redirect(
            `${GITHUB_URL}/${urlParts[1]}/issues/${urlParts[3]}`,
            301
          )
      }
      break
    case 'afterhours':
      return Response.redirect('https://afterhours.dscvit.com', 301)

    case 'solchal':
    case 'solutionchallengeinfo':
      return Response.redirect(
        'https://dsc.community.dev/events/details/developer-student-clubs-vellore-institute-of-technology-presents-solution-challenge-info-session/#/',
        301
      )
    case 'community':
      return Response.redirect(
        'https://dsc.community.dev/vellore-institute-of-technology/',
        301
      )
    case 'twitter':
      return Response.redirect('https://twitter.com/dscvit', 301)
    case 'linkedin':
      return Response.redirect('https://www.linkedin.com/company/dscvit', 301)
    case 'insta':
      return Response.redirect('https://www.instagram.com/dscvitvellore', 301)
    case 'wt21':
      return Response.redirect('https://womentechies.dscvit.com/', 301)
    case 'youtube':
      return Response.redirect('https://www.youtube.com/channel/UCvT-ZJF7fXHJi9kDeCPR-zg',301)
    default:
      return getPageFromKV(event)
  }
}
