import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import image1 from '../../images/example1.jpg'

const ThumbnailCard = ({ fontSize, category, title, detail }) => {
  const { articleCategory, articleTitle, date, image } = detail;

  return (
    <ThumbnailCardWrapper fontSize={fontSize} category={category}>
      <div className='article-hub-container'>
        <h4 className='article-category'>{articleCategory ? articleCategory : title}</h4>
        <span className='article-posted'>{date}</span>
      </div>
      <div className='article-thumbnail-container'>
        <Image fluid={image.childImageSharp.fluid} />
      </div>
      <div className='article-thumbnail-header header'>{articleTitle}</div>
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
`

export default ThumbnailCard
