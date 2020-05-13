const path = require('path')

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions
    const bookTemplate = path.resolve('src/templates/bookTemplate.js')

    return graphql(`
    {
        allBook {
          edges {
            node {
              author {
                name
              }
              title
              summary
              id
            }
          }
        }
      }
    `).then((result) => {
        if(result.errors) {
            throw result.errors
        } else {
            result.data.allBook.edges.forEach(book => {
                createPage({
                    path: `/book/${book.node.id}`,
                    component: bookTemplate,
                    context: book.node
                })
            })
        }
    })
}