import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Intro = () => {
  return (
    <StaticQuery
      query={graphql`
        {
            allWordpressPage(filter: {title: {eq: "Home"}}) {
              edges {
                node {
                  acf {
                    hero_paragraph
                    hero_title
                }
              }
            }
          }
        }
      `}

      render={props => {

        const homeIntro = props.allWordpressPage.edges[0].node.acf

        const { hero_paragraph, hero_title } = homeIntro

        return(
        <Container>
          <Row className="align-items-center">
            <Col align="center">
            <span className="align-middle">{ hero_title }</span>
              <br />
            <span className="align-middle">{ hero_paragraph }</span>
              <br />
            <Button variant="dark" size="lg">Portfolio</Button>
            </Col>
          </Row>
        </Container>
      )}}
    />
  )
}

export default Intro
