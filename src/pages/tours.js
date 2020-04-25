import React from 'react';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Tours from '../components/Tours/Tours';
import { graphql } from 'gatsby';

import PropTypes from 'prop-types';
import Tour from '../components/Tours/Tour';
import SEO from '../components/SEO';

const tours = ({ data }) => {
  return (
    <Layout>
      <SEO title="Tours" />

      <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
      <Tours />
    </Layout>
  );
};
Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};
export default tours;
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
