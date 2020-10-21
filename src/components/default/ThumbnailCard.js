import React from 'react'
import styled from 'styled-components'
import image1 from '../../images/example1.jpg'

const ThumbnailCard = ({ fontSize, category, title }) => {
  return (
    <ThumbnailCardWrapper fontSize={fontSize} category={category}>
      <div className='article-hub-container'>
        <h4 className='article-category'>{title}</h4>
        <span className='article-posted'>Posted 10 minutes ago</span>
      </div>
      <div className='article-thumbnail-container'>
        <img src={image1} alt='thumbnail' />
      </div>
      <div className='article-thumbnail-header header'>
        An update for pet owners: More brands of dog food recalled beacuse they may be toxic
      </div>
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
      font-size: ${props => props.category ? 'inherit' : '1.5rem'}
    }
    .article-posted {
      font-size: 0.8rem;
      color: var(--grey);
    }
  }
`

export default ThumbnailCard
