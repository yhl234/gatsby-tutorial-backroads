import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact/Contact';
import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';

const contact = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact" />

      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      <Contact></Contact>
    </Layout>
  );
};

export default contact;
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
