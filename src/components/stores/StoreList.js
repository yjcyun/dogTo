import React, { useState } from 'react'
import styled from 'styled-components'
import Map from './Map'
import StoreListItem from './StoreListItem'

const StoreList = ({ filteredData }) => {
  const [selectedStore, setSelectedStore] = useState(null);

  return (
    <StoreListWrapper>
      <ul>
        {filteredData.map(({ id, frontmatter }) =>
          <StoreListItem
            data={frontmatter}
            key={id}
            setSelectedStore={setSelectedStore}
          />
        )}
      </ul>
      <div className='map'>
        <Map
          filteredData={filteredData}
          setSelectedStore={setSelectedStore}
          selectedStore={selectedStore}
        />
      </div>
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

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    .map {
      display: none;
    }
  }
`

export default StoreList
