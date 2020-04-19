import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
export default () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
    </Layout>
  );
};
