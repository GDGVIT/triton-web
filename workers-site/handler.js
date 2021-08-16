import { getAssetFromKV } from '@cloudflare/kv-asset-handler'
import { data, mediumRedirect, redirect } from './data.js'

const MEDIUM_URL = 'https://medium.com/gdg-vit/'
const GITHUB_USERNAME = 'GDGVIT'
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`
const PERMISSIONS_POLICY =
  'accelerometer=(), autoplay=(), camera=(), encrypted-media=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), sync-xhr=(), usb=()'

function playstoreLink(name) {
  return `https://play.google.com/store/apps/details?id=com.dscvit.${name}`
}

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
        mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404.html`, req),
      })
      return new Response(notFoundResponse.body, {
        ...notFoundResponse,
        status: 404,
      })
    } catch (e) {}
    return new Response(e.message || e.toString(), { status: 500 })
  }
}

async function redirectGitHub(event) {
  const urlParts = event.request.url
    .split('?')[0]
    .replace(BASE_URL, '')
    .split('/')
    .map((s) => s.toLowerCase())
  if (redirect[urlParts[0]]) {
    return Response.redirect(redirect[urlParts[0]], 301)
  }
  if (urlParts[0] == 'g') {
    switch (urlParts.length) {
      case 1:
        return Response.redirect(GITHUB_URL, 301)
      case 2:
        return Response.redirect(`${GITHUB_URL}/${urlParts[1]}`, 301)
      case 3:
        return Response.redirect(`${GITHUB_URL}/${urlParts[1]}/commit/${urlParts[2]}`, 301)
      case 4:
        return Response.redirect(`${GITHUB_URL}/${urlParts[1]}/issues/${urlParts[3]}`, 301)
    }
  }

  if(urlParts[0] == 'm' && mediumRedirect[urlParts[1]]){
      return Response.redirect(mediumRedirect[urlParts[1]],301)
  }

  // if the provided article name isn't valid then redirected to dscvit medium homepage
  if(urlParts[0] == 'm'){
    return Response.redirect(`${MEDIUM_URL}`,301)
  }

  // only works for android apps.
  // cannot handle ios apps right now.
  if (urlParts[0] == 'app') {
    return Response.redirect(playstoreLink(urlParts[1]), 301)
  }
  return getPageFromKV(event)
}
