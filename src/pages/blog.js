import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      <div>
        Hello from blog page
        <Link to="/">Back Home</Link>
      </div>
    </Layout>
  );
};

export default blog;
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
