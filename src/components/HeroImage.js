import React, { useState, useEffect } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { Container, Col, Row } from 'react-bootstrap'
// import styled from 'styled-components';

const HeroImage = () => {

  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    });

  return(
    <StaticQuery

    query={graphql`
        {
          allWordpressPage(filter: {title: {eq: "Home"}}) {
            edges {
              node {
                acf {
                  hero_image {
                    source_url
                  }
                  hero_image_mobile {
                    source_url
                  }
                }
              }
            }
          }
        }
      `}


    render = { props => {

      const homePage = props.allWordpressPage.edges[0].node.acf

      const { hero_image, hero_image_mobile } = homePage

      const bg_img = windowWidth >= 650 ? hero_image : hero_image_mobile

      const container_style = {
        backgroundColor: 'white',
        color: 'white',
        height: '100vh',
        backgroundImage: 'url(' + bg_img.source_url + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }

      return (
        <Container fluid style={ container_style }>
          <Row className="align-items-center">
            <Col align="center">
            </Col>
          </Row>
        </Container>
      )
    }}
  />
)};

export default HeroImage
