import React from 'react'
import Layout from '../components/layout'
import HeroImage from '../components/HeroImage'
import Intro from '../components/Intro'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
// import { Button } from 'react-bootstrap';


export default ({pageContext}) => (
  <Layout>
    <HeroImage />
    <Intro />
    <About />
    <Portfolio />
  </Layout>
);
