import React from 'react'
import styled from 'styled-components'
import ThumbnailCard from '../ThumbnailCard'
import FacebookPlugin from './FacebookPlugin'

const News = () => {
  return (
    <NewsWrapper>
      <ThumbnailCard />
      <FacebookPlugin />
    </NewsWrapper>
  )
}

const NewsWrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 2rem;

`

export default News
