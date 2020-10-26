import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ThumbnailCard = ({ fontSize, category, name, detail }) => {
  const { articleCategory, articleTitle, date, image, slug } = detail;

  return (
    <ThumbnailCardWrapper fontSize={fontSize} category={category}>
      <div className='article-hub-container'>
        <h4 className='article-category'>{articleCategory ? articleCategory : name}</h4>
        <span className='article-posted'>{date}</span>
      </div>
      <Link to={`/news/${slug}`} className='article-link'>
        <div className='article-thumbnail-container'>
          <Image fluid={image.childImageSharp.fluid} />
        </div>
        <div className='article-thumbnail-header header'>{articleTitle}</div>
      </Link>
    </ThumbnailCardWrapper>
  )
}

const ThumbnailCardWrapper = styled.div`
  .article-thumbnail-header {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-top: -3rem;
    background: var(--white);
    width: 90%;
    font-weight: 800;
    font-size: ${props => props.fontSize && props.fontSize}  
  }

  .article-hub-container{
    margin-bottom: 0.5rem;
    .article-category {
      margin-right: 1rem;
      font-family: var(--secondary-heading-ff);
      display: inline-block;
      color: ${props => props.category ? 'var(--red)' : 'var(--grey)'};
      font-size: ${props => props.category ? 'inherit' : '1.5rem'};
      text-transform: capitalize;
    }
    .article-posted {
      font-size: 0.8rem;
      color: var(--grey);
    }
  }
  
  .article-link:hover .article-thumbnail-header {
    color: var(--red);
  }
`

export default ThumbnailCard