import React from 'react'
import styled from 'styled-components'
import StoreThumbnail from './StoreThumbnail'

const StoreThumbnailContainer = ({ nodes }) => {
  return (
    <StoreThumbnailContainerWrapper>
      <h4 className='subtitle header'>Latest Reviews</h4>
      <div className='grid-3'>
        {nodes.map(({ frontmatter }, id) => (
          <StoreThumbnail detail={frontmatter} key={id} />
        ))}
      </div>
    </StoreThumbnailContainerWrapper>
  )
}

const StoreThumbnailContainerWrapper = styled.div`
  margin: 3rem 0;
`

export default StoreThumbnailContainer