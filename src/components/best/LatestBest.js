import React, { useState } from 'react'
import styled from 'styled-components'
import LoadMore from '../default/LoadMore';
import StoreThumbnail from '../stores/StoreThumbnail'

const LatestBest = ({ data }) => {
  const [postsToShow, setPostsToShow] = useState(6);

  const handleShowMorePosts = () => {
    setPostsToShow(prevVisiblePost => prevVisiblePost + 6);
  }

  return (
    <LatestBestWrapper>
      <h4 className='subtitle header'>Latest in Best of Toronto</h4>
      <div className='latest-best-container'>
        {data.slice(0, postsToShow).map(el => (
          <StoreThumbnail key={el.id} detail={el.frontmatter} bestLatest />
        ))}
      </div>
      <LoadMore click={handleShowMorePosts} />
    </LatestBestWrapper>
  )
}

const LatestBestWrapper = styled.section`
  margin: 2rem 0;
  .latest-best-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }

  @media(min-width:600px) {
    .latest-best-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(min-width:996px) {
    .latest-best-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

`

export default LatestBest
