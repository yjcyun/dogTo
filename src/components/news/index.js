import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import LoadMore from '../default/LoadMore'
import ThumbnailCard from '../default/ThumbnailCard'
import FacebookPlugin from './FacebookPlugin'
import Subscribe from './Subscribe'

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

const News = () => {
  const { articles: { nodes } } = useStaticQuery(query);
  const latestArticle = nodes[0].frontmatter;
  return (
    <NewsWrapper>
      <section className='intro'>
        <ThumbnailCard fontSize='2rem' title='Latest News' detail={latestArticle} />
        <FacebookPlugin />
      </section>
      <section className='grid-2 mt-4'>
        {nodes.slice(1).map(({ frontmatter }, id) => (
          <ThumbnailCard key={id} fontSize='1.5rem' category detail={frontmatter} />
        ))}
      </section>
      <section className='mt-4'>
        <Subscribe
          heading='Get more news delivered to your inbox'
        >
          You can unsubscribe anytime or <a href="/">contact us</a> for details
        </Subscribe>
      </section>
      <section className='grid-3 mt-4'>
        {nodes.slice(1).map(({ frontmatter },id) => (
          <ThumbnailCard key={id} fontSize='1.5rem' category detail={frontmatter} />
        ))}
      </section>
      
      <LoadMore />
    </NewsWrapper>
  )
}

const NewsWrapper = styled.div`
  padding: 1rem 0;
  .intro{
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 2rem;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`

export default News