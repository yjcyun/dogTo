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
  query GetSingleArticle($slug:String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        title
        category
        author
        date(fromNow: true)
        imageCredit
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
      frontmatter: { title, category, image, date, author, imageCredit }, body }
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
        {/* Article thumbnail and title */}
        <ArticleDetailTitle>
          <div className='article-header header'>{title}</div>
          <div className='article-img-container'>
            <Image fluid={image.childImageSharp.fluid} />
          </div>
        </ArticleDetailTitle>
        {/* Article markdown */}
        <ArticleDetailBody>
          <Sidebar />
          <div className='article-body'>
            <MDXRenderer>{body}</MDXRenderer>
            <div className='article-credit'><span>Lead photo by </span>{imageCredit}</div>
            <div className='article-body-share'>
              <SocialShare />
            </div>
          </div>
        </ArticleDetailBody>
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
  align-items: center;
  justify-content: space-between;
  .article-hub{
    display: flex;
    align-items: center;
  }
  .article-author {
    margin-right: 0.8rem;
  }
  .article-category {
    margin-right: 4rem;
    font-family: var(--secondary-heading-ff);
    display: inline-block;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  .article-posted, .article-author {
    font-size: 0.8rem;
  }
  .article-report {
    color: var(--grey);
    font-size: 0.8rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
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
    font-size: 3rem;
    z-index: 5;
  }
  .article-img-container {
    margin-top: -4rem;
  }
`

const ArticleDetailBody = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 4rem;
  padding: 4rem 0;

  .article-body {
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
    .article-body-share{
      button {
        font-size: 1rem;
        margin-right: 3rem;
        color: var(--black);
        .icon {
          margin-right: 0.5rem;
          font-size: 1.5rem;
          transition: 0.2s;
        }
      }
      button.facebook:hover {
        color: var(--facebook);
      }
      button.twitter:hover {
        color: var(--twitter);
      }
      button.share:hover {
        color: var(--red);
      }
    }
  }
`

export default Article