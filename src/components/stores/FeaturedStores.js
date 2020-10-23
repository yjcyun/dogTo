import React from 'react'
import styled from 'styled-components'
import ThumbnailCard from '../default/ThumbnailCard'

const FeaturedStores = () => {
  return (
    <FeaturedStoresWrapper>
      <h4 className='header subtitle'>Featured</h4>
      {/* <ThumbnailCard /> */}
    </FeaturedStoresWrapper>
  )
}

const FeaturedStoresWrapper = styled.section`
  padding: 1rem 0;
`

export default FeaturedStores
