import React from 'react'
import styled from 'styled-components'
import LoadMore from '../default/LoadMore'
import ThumbnailCard from '../default/ThumbnailCard'
import FacebookPlugin from './FacebookPlugin'
import Subscribe from './Subscribe'

const News = () => {
  return (
    <NewsWrapper>
      <section className='intro'>
        <ThumbnailCard fontSize='2rem' title='Latest News' />
        <FacebookPlugin />
      </section>
      <section className='grid-2 mt-4'>
        <ThumbnailCard fontSize='1.5rem' category title='Shop' />
        <ThumbnailCard fontSize='1.5rem' category title='Parks' />
        <ThumbnailCard fontSize='1.5rem' category title='Sports & Play' />
        <ThumbnailCard fontSize='1.5rem' category title='City' />
      </section>
      <section className='grid-3 mt-4'>
        <ThumbnailCard fontSize='1.5rem' category title='Shop' />
        <ThumbnailCard fontSize='1.5rem' category title='Parks' />
        <ThumbnailCard fontSize='1.5rem' category title='Sports & Play' />
        <ThumbnailCard fontSize='1.5rem' category title='City' />
        <ThumbnailCard fontSize='1.5rem' category title='Sports & Play' />
        <ThumbnailCard fontSize='1.5rem' category title='City' />
      </section>
      <section className='mt-4'>
        <Subscribe
          heading='Get more news delivered to your inbox'
        >
          You can unsubscribe anytime or <a href="/">contact us</a> for details
        </Subscribe>
      </section>
      <section className='grid-3 mt-4'>
        <ThumbnailCard fontSize='1.5rem' category title='Shop' />
        <ThumbnailCard fontSize='1.5rem' category title='Parks' />
        <ThumbnailCard fontSize='1.5rem' category title='Sports & Play' />
        <ThumbnailCard fontSize='1.5rem' category title='City' />
        <ThumbnailCard fontSize='1.5rem' category title='Sports & Play' />
        <ThumbnailCard fontSize='1.5rem' category title='City' />
      </section>
      <LoadMore />
    </NewsWrapper>
  )
}

const NewsWrapper = styled.div`
  padding: 1rem 0;
  .intro{
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 2rem;
  }
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  .grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
`

export default News