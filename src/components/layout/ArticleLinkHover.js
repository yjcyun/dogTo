import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import NavlinkHover from './NavlinkHover'

export const query = graphql`
  {
    recentReviews: allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: {fileAbsolutePath: {regex: "/(articles)/"}}) {
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

const ArticleLinkHover = ({ setArticleNavbox }) => {
  const { recentReviews: { nodes } } = useStaticQuery(query);

  return (
    <NavlinkHover
      setNavbox={setArticleNavbox}
      data={nodes}
      link='news'
    />
  )
}


export default ArticleLinkHover