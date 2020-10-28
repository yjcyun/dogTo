import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import SocialShare from '../components/default/SocialShare'
import Subscribe from '../components/news/Subscribe'
import Layout from '../components/layout/Layout'
import StoreSidebar from '../components/stores/StoreSidebar'
// import StoreMap from '../components/stores/StoreMap'

export const query = graphql`
  query GetSingleStore($slug:String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        address
        coordinates
        city
        author
        category
        date(fromNow: true)
        name
        imageCredit
        rating
        slug
        website
        phone
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

const Article = ({ data }) => {
  const {
    mdx: {
      frontmatter: { name, category, image, date, author, imageCredit }, body }
  } = data;

  return (
    <Layout>
      <div className='page-padding'>
        {/* Article Hub */}
        <ArticleHeadingWrapper>
          <div className='article-hub'>
            <h4 className='article-category text-red'>{category}</h4>
            <span className='article-author'>{author}</span>
            <span className='article-posted'>{date}</span>
          </div>
          <a href='mailto:abc@email.com' className='article-report'>Report Inaccuracy</a>
        </ArticleHeadingWrapper>

        {/* Article markdown */}
        <ArticleDetailBody>
          <StoreSidebar {...data} />
          <ArticleDetailTitle>
            {/* Article thumbnail and title */}
            <div className='article-header header'>{name}</div>
            <div className='article-img-container'>
              <Image fluid={image.childImageSharp.fluid} />
            </div>
            {/* Article body */}
            <div className='article-body'>
              <MDXRenderer>{body}</MDXRenderer>
              <div className='article-credit'><span>Lead photo by </span>{imageCredit}</div>
              <SocialShare />
            </div>
          </ArticleDetailTitle>
        </ArticleDetailBody>
        {/* <StoreMap name={name} coordinates={coordinates}/> */}
        {/* Subscribe banner */}
        <Subscribe heading='Stay in the loop'>
          Sign up for our free email newsletter. <br />
      Unsubscribe anytime or <a href="/">contact us</a> for details
        </Subscribe>
      </div>
    </Layout>
  )
}

const ArticleHeadingWrapper = styled.div`
  margin: 1rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--light-grey);
  display: flex;
  flex-direction: column;
  align-items: center;

  .article-hub{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .article-author {
    margin-right: 0.8rem;
  }
  .article-category {
    display: none;
    margin-right: 4rem;
    font-family: var(--secondary-heading-ff);
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  .article-posted, .article-author {
    font-size: 0.8rem;
  }
  .article-report {
    display: none;
    color: var(--grey);
    font-size: 0.8rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  @media(min-width:768px){
    flex-direction: row;
    justify-content: space-between;
    .article-category{
      margin-right: 4rem;
      display: inline-block;
    }
    .article-report {
      display: inline-block;
    }
  }
`

const ArticleDetailTitle = styled.section`
  .article-header {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--white);
    width: 90%;
    font-weight: 800;
    font-size: 1.5rem;
    z-index: 5;
  }
  .article-img-container {
    margin-top: -2rem;
  }
  @media(min-width:768px) {
    .article-header{
      font-size: 3rem;
    }
    .article-img-container {
      margin-top: -4rem;
    }
  }
`

const ArticleDetailBody = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  padding: 2rem 0;

  @media(min-width:768px) {
    grid-template-columns: 1fr 2fr;
  }

  .article-body {
    margin-top: 2rem;
    p {
      line-height: 2;
      margin-bottom: 2rem;
    }
    .article-credit {
      font-size: 0.8rem;
      border-bottom: 1px solid var(--bcg-grey);
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      span {
        color: var(--grey);
      }
    }
  }
`

export default Article