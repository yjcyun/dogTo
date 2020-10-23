import React from 'react'
import styled from 'styled-components'
import StoreThumbnail from './StoreThumbnail'

const StoreThumbnailContainer = () => {
  return (
    <StoreThumbnailContainerWrapper>
      <h4 className='subtitle header'>Latest Reviews</h4>
      <div className='grid-3'>
        <StoreThumbnail />
        <StoreThumbnail />
        <StoreThumbnail />
        <StoreThumbnail />
        <StoreThumbnail />
        <StoreThumbnail />
      </div>
    </StoreThumbnailContainerWrapper>
  )
}

const StoreThumbnailContainerWrapper = styled.div`
  margin: 3rem 0;
  .subtitle {
    color: var(--grey);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

export default StoreThumbnailContainer