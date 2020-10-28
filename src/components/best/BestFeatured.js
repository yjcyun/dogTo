import React from 'react'
import styled from 'styled-components'
import StoreThumbnail from '../stores/StoreThumbnail'

const BestFeatured = ({ data }) => {
  return (
    <BestFeaturedWrapper>
      <h4 className='subtitle header'>Featured Best</h4>
      <div className='best-featured-container'>
        {data
          .filter(el => el.frontmatter.featured === true)
          .sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1)
          .map(el => (
            <StoreThumbnail key={el.id} detail={el.frontmatter} bestFeatured />
          ))
        }
      </div>
    </BestFeaturedWrapper>
  )
}

const BestFeaturedWrapper = styled.div`
  .best-featured-container{
    display: grid;
  }
  @media(min-width: 600px) and (max-width: 996px) {
    .best-featured-container{
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    }  
  }
`

export default BestFeatured