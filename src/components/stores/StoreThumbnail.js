import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import image from '../../images/example1.jpg'

const StoreThumbnail = () => {
  return (
    <StoreThumbnailWrapper>
      <Link to='/'>
        <div className='store-thumbnail-container'>
          <img src={image} alt='Store thumbnail' />
        </div>
        <div className='store-thumbnail-header header'>Petsmart</div>
      </Link>
    </StoreThumbnailWrapper>
  )
}

const StoreThumbnailWrapper = styled.div`
  a:hover .store-thumbnail-header {
    color: var(--red);
  }
  .store-thumbnail-container{
    margin-bottom: -2rem;
  }
  .store-thumbnail-header {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--white);
    max-width: 90%;
    font-weight: 800;
    font-size: 2rem;
  }
`

export default StoreThumbnail
