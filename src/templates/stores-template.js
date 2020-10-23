import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Sidebar from '../components/article/Sidebar'
import SocialShare from '../components/default/SocialShare'
import Subscribe from '../components/news/Subscribe'
import Layout from '../components/layout/Layout'

export const query = graphql`
  query getStores($skip:Int!, $limit:Int!) {
   stores: allMdx(
      limit: $limit, 
      skip: $skip, 
      sort: {fields: frontmatter___title, order: ASC}, 
      filter: {fileAbsolutePath: {regex: "/(stores)/"}}) {
      nodes {
        id
        body
        frontmatter {
          address
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
                src
              }
            }
          }
        }
      }
    }
  }
`

const Stores = ({ data }) => {
  const { stores: { nodes } } = data;
  console.log(nodes);
  return (
    <Layout>
     
    </Layout>
  )
}
 

export default Stores