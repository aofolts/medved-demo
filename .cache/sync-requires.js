const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-page-home-index-js": hot(preferDefault(require("/Users/aofolts/GitHub/medved-demo/src/templates/page-home/index.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/aofolts/GitHub/medved-demo/.cache/dev-404-page.js")))
}

