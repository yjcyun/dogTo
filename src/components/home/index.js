import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import ThumbnailCard from '../default/ThumbnailCard'
import Trending from './Trending'

export const query = graphql`
  {
    articles:allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          articleCategory: category
          date(fromNow: true)
          articleTitle: name
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

const Home = () => {
  const { articles: { nodes } } = useStaticQuery(query);
  // latest news article
  const latestArticle = nodes[0].frontmatter;

  return (
    <HomeWrapper>
      <ThumbnailCard fontSize='2rem' category detail={latestArticle}/>
      <Trending />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  padding: 1rem;
  
  @media(min-width: 768px) {
    grid-template-columns: 3fr 2fr;
    padding: 1rem 2rem;
  }
`

export default Home
