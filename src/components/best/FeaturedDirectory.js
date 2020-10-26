import React from 'react'
import BestFeatured from './BestFeatured'
import { graphql, useStaticQuery } from 'gatsby'
import Directory from './Directory'
import styled from 'styled-components'

export const query = graphql`
  {
    best: allMdx(
      filter: {fileAbsolutePath: {regex: "/(best)/"}}, 
      sort: {fields: frontmatter___name, order: ASC}
    ) {
      nodes {
        body
        id
        frontmatter {
          featured
          author
          date(fromNow: true)
          name
          slug
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
const FeaturedDirectory = () => {
  const { best: { nodes } } = useStaticQuery(query);

  return (
    <FeaturedDirectoryWrapper className='page-padding'>
      <BestFeatured data={nodes} />
      <Directory data={nodes} />
    </FeaturedDirectoryWrapper>
  )
}

const FeaturedDirectoryWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 1rem;
`

export default FeaturedDirectory
