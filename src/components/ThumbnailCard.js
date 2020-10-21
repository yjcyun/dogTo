import React from 'react'
import styled from 'styled-components'
import image1 from '../images/example1.jpg'

const ThumbnailCard = () => {
  return (
    <ThumbnailCardWrapper>
      <div className='article-hub-container'>
        <h4 class='article-category text-red'>Eat & Drink</h4>
        <span class='article-posted'>Posted 10 minutes ago</span>
      </div>
      <div className='article-thumbnail-container'>
        <img src={image1} alt='thumbnail' />
      </div>
      <div className='article-thumbnail-header header'>
        <h2>Toronto's newest sweets shop makes sushi for dessert</h2>
      </div>
    </ThumbnailCardWrapper>
  )
}

const ThumbnailCardWrapper = styled.div`
  .article-thumbnail-header {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-top: -4rem;
    background: var(--white);
    width: 90%;
    h2 {
      font-weight: 800;
    }
  }

  .article-hub-container{
    margin-bottom: 0.5rem;
    .article-category {
      margin-right: 1rem;
      font-family: var(--secondary-heading-ff);
      display: inline-block;
    }
    .article-posted {
      font-size: 0.8rem;
      color: var(--grey);
    }
  }
`

export default ThumbnailCard
