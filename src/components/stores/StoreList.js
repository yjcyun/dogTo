import React from 'react'
import styled from 'styled-components'
import StoreListItem from './StoreListItem'

const StoreList = ({ filteredData }) => {

  return (
    <StoreListWrapper>
      <ul>
        {filteredData.map(({ id, frontmatter }) =>
          <StoreListItem data={frontmatter} key={id} />
        )}
      </ul>
      <div className='map'>Map</div>
    </StoreListWrapper>
  )
}

const StoreListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 1rem 0;
  padding: 0 1rem;
  border-top: 3px solid var(--black);
  border-bottom: 3px solid var(--black);
  height: 30rem;
  ul {
    overflow: auto; 
  }
`

export default StoreList
