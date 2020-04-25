const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve('./src/templates/tour-template.js'),
      context: {
        slug: node.slug,
      },
    });
  });
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve('./src/templates/blog-template.js'),
      context: {
        slug: node.slug,
      },
    });
  });
  // amount of post
  const posts = data.posts.edges;
  // posts per page
  const postsPerPage = 5;
  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage);
  const pages = Array.from({ length: numPages });
  pages.forEach((_, index) => {
    createPage({
      path: index === 0 ? '/blogs' : `/blogs/${index + 1}`,
      component: path.resolve('./src/templates/blogs-list-template.js'),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    });
  });
};
