import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `);
  const {
    site: {
      siteMetadata: { author, description, title },
    },
  } = data;
  return (
    <div>
      <h1>title: {title} </h1>
      <h1>author: {author}</h1>
    </div>
  );
};

export default Header;
