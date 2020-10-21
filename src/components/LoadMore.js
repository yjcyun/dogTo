import React from 'react'
import styled from 'styled-components'

const LoadMore = () => {
  return (
    <LoadMoreWrapper>
      <div className='load-more-btn-container'>
        <button>Load More</button>
      </div>
    </LoadMoreWrapper>
  )
}

const LoadMoreWrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
 
  .load-more-btn-container {
    display: flex;
    align-items: center;
    width: 100%;
    ::before, ::after {
      content:'';
      display: block;
      height: 1px;
      border-bottom:1px solid var(--red);
      flex: 1 1 auto;
    }
    button {
      background: var(--red);
      color: var(--white);
      padding: 0.7rem;
      width: 15rem;
      transition: 0.2s;
      :hover {
        background: var(--black);
      }
    }
  }
`

export default LoadMore