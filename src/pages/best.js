import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import FeaturedDirectory from '../components/best/FeaturedDirectory'
import Layout from '../components/layout/Layout'
import Subscribe from '../components/news/Subscribe'
import LatestBest from '../components/best/LatestBest'

export const query = graphql`
  {
    best: allMdx(
      filter: {fileAbsolutePath: {regex: "/(best)/"}}
    ) {
      nodes {
        body
        id
        frontmatter {
          views
          featured
          author
          date(fromNow: true)
          name
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`


const BestOfToronto = () => {
  const { best: { nodes } } = useStaticQuery(query);

  return (
    <Layout>
      <FeaturedDirectory data={nodes} />
      <div className='page-padding'>
        <div style={{margin: '2rem 0'}}>
          <Subscribe
            heading='Stay in the loop'
          >Sign up for our free email newsletter. <br />
        Unsubscribe anytime or <a href="/">contact us</a> for details
        </Subscribe>
        </div>
        <LatestBest data={nodes} />

      </div>

    </Layout>
  )
}

export default BestOfToronto
