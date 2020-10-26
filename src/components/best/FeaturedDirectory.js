import React from 'react'
import BestFeatured from './BestFeatured'
import Directory from './Directory'
import styled from 'styled-components'


const FeaturedDirectory = ({ data }) => {
  return (
    <FeaturedDirectoryWrapper className='page-padding'>
      <BestFeatured data={data} />
      <Directory data={data} />
    </FeaturedDirectoryWrapper>
  )
}

const FeaturedDirectoryWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 1rem;
`

export default FeaturedDirectory
