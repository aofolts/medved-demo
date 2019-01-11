const path = require('path')

const templates = {
  page: path.resolve('./src/templates/page/index.js'),
  pages: {
    home: path.resolve('./src/templates/page-home/index.js'),
  }
}

exports.createPages = ({graphql,actions}) => {
  const {
    createPage
  } = actions

  const createPages = new Promise((resolve,reject) => {
    resolve(
      graphql(
        `
          {
            pages: allContentfulPage {
              edges {
                node {
                  slug
                  layout {
                    __typename
                  }
                }
              }
            }
          }
        `
      ).then(({
        errors,
        data
      }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }
 
        const pages = data.pages.edges.map(entry => entry.node)

        const getPageTemplate = entry => {
          // gatsby-source-contentful single reference field bug
          const layoutType = entry.layout[0]['__typename']

          if (layoutType === 'ContentfulLayoutPageHome') return templates.pages.home
          if (entry.slug === 'journal') return templates.pages.journal
          return templates.pages[entry.slug] || templates.page
        }

        const getPagePath = entry => {
          return entry.slug === 'home' ? '/' : `/${entry.slug}`
        }

        pages.forEach(entry => {
          createPage({
            path: getPagePath(entry),
            component: getPageTemplate(entry),
            context: {
              slug: entry.slug
            }
          })
        })
      })
    )
  })

  return Promise.all([
    createPages
  ])
}

// Allow for imports relative to src
exports.onCreateWebpackConfig = ({
  actions
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve('./src'), 
        'node_modules'
      ],
    },
    stats: {
      moduleTrace: false,
    }
  })
}