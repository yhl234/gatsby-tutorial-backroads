import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Images from '../examples/Images';
const blog = () => {
  return (
    <Layout>
      <div>
        Hello from blog page
        <Link to="/">Back Home</Link>
      </div>
      <Images />
    </Layout>
  );
};

export default blog;
