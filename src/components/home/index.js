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
          articleTitle: title
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
  grid-template-columns: 3fr 2fr;
  grid-gap: 2rem;
  padding: 1rem 2rem;
`

export default Home
