import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import LoadMore from '../default/LoadMore';
import StoreThumbnail from './StoreThumbnail'

const StoreThumbnailContainer = ({ nodes }) => {
  const [postsToShow, setPostsToShow] = useState(6);

  const handleShowMorePosts = () => {
    setPostsToShow(prevVisiblePost => prevVisiblePost + 6);
  }

  return (
    <StoreThumbnailContainerWrapper>
      <h4 className='subtitle header'>Latest Reviews</h4>
      <div className='grid-3'>
        {nodes.slice(0, postsToShow).map(({ frontmatter }, id) => (
          <StoreThumbnail detail={frontmatter} key={id} />
        ))}
      </div>
      <LoadMore click={handleShowMorePosts} />
    </StoreThumbnailContainerWrapper>
  )
}

const StoreThumbnailContainerWrapper = styled.div`
  margin: 3rem 0;
`

export default StoreThumbnailContainer