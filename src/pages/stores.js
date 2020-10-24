import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/Layout'
import FindStores from '../components/stores/FindStores'
import Subscribe from '../components/news/Subscribe'
import StoreThumbnailContainer from '../components/stores/StoreThumbnailContainer'
import LoadMore from '../components/default/LoadMore'
import FeaturedStores from '../components/stores/FeaturedStores'

export const query = graphql`
  {
    stores: allMdx( 
      sort: {fields: frontmatter___title, order: ASC}, 
      filter: {fileAbsolutePath: {regex: "/(stores)/"}}) {
      nodes {
        id
        body
        frontmatter {
          address
          coordinates
          author
          category
          date(fromNow: true)
          name
          imageCredit
          rating
          slug
          title
          website
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      totalCount
    }
  }
`

const Stores = () => {
  const { stores: { nodes, totalCount} } = useStaticQuery(query);

  return (
    <Layout>
      <div className='page-padding'>
        <FeaturedStores />
      </div>
      <FindStores nodes={nodes} totalCount={totalCount} />
      <div className='page-padding'>
        <StoreThumbnailContainer nodes={nodes} />
      </div>
    </Layout>
  )
}

export default Stores