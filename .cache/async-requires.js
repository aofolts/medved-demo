// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-page-home-index-js": () => import("/Users/aofolts/GitHub/medved-demo/src/templates/page-home/index.js" /* webpackChunkName: "component---src-templates-page-home-index-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/aofolts/GitHub/medved-demo/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/aofolts/GitHub/medved-demo/.cache/data.json")

