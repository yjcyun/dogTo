import React from 'react'
import styled from 'styled-components'
import ThumbnailCard from '../ThumbnailCard'
import Trending from './Trending'

const Home = () => {
  return (
    <HomeWrapper>
      <ThumbnailCard fontSize='2rem' category title='Eat & Shop'/>
      <Trending />
    </HomeWrapper>
  )
}

const HomeWrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 2rem;
`

export default Home
