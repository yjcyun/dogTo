import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import NavlinkHover from './NavlinkHover'

export const query = graphql`
  {
    recentReviews: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "/(stores)/"}}) {
      nodes {
        id
        frontmatter {
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

const StoreLinkHover = ({ setStoreNavbox }) => {
  const { recentReviews: { nodes } } = useStaticQuery(query);

  return (
    <NavlinkHover
      setNavbox={setStoreNavbox}
      data={nodes}
      link='stores'
    />
  )
}


export default StoreLinkHover