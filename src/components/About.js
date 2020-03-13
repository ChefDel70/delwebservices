import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import { Col, Row, Container, Image } from 'react-bootstrap'

const About = () => {
  return(
    <StaticQuery

      query={graphql`
        {
          allWordpressPage(filter: {title: {eq: "Home"}}) {
            edges {
              node {
                acf {
                  intro_image {
                    source_url
                  }
                  team_image {
                    source_url
                  }
                }
              }
            }
          }
        }
      `}

      render={props=> {

      return(
        <Container>
          <Row>
            <Col>
              <span>From Chef</span>
              <br />
              <span>To</span>
              <br />
              <span>Web Development</span>
            </Col>
            <Col>
              <Image src={props.allWordpressPage.edges[0].node.acf.intro_image.source_url} alt="Intro" thumbnail/>
            </Col>
          </Row>
          <Row>
              <Image src={props.allWordpressPage.edges[0].node.acf.team_image.source_url} alt="Intro" fluid/>
          </Row>
        </Container>
      )}}
    />
  )
}

export default About
