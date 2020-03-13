import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import { Card, CardColumns } from 'react-bootstrap'

const Portfolio = () => {
  return(
    <StaticQuery
      query={graphql`
        {
          allWordpressWpPortfolio {
            edges {
              node {
                title
                featured_media {
                  source_url
                  slug
                }
              }
            }
          }
        }
      `}

      render={props=> {

        return(

          <CardColumns>
            {props.allWordpressWpPortfolio.edges.map(item => (
             <Card variant="top" key={item.node.title}>
               <Card.Img src={item.node.featured_media.source_url} />
             </Card>
            ))}
          </CardColumns>

      )}}
    />
  )
}

export default Portfolio
