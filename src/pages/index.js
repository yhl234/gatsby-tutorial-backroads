import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
export default () => {
  return (
    <Layout>
      <div>
        Hello from BackRoad!
        <Link to="/blog/">Blog Page</Link>
      </div>
    </Layout>
  );
};
