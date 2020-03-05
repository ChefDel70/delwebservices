import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'
import { Button } from 'react-bootstrap';


export default ({pageContext}) => (
  <Layout>
    <HeroImage />
      <div>
        <Button variant="primary">Click Here</Button>
      </div>
  </Layout>
);
