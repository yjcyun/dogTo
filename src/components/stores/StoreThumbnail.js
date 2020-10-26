import { Link } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const StoreThumbnail = ({ detail, bestFeatured, bestLatest }) => {

  return (
    <StoreThumbnailWrapper best={bestFeatured} bestLatest={bestLatest}>
      <Link to={detail.slug}>
        <div className='store-thumbnail-container'>
          <Image fluid={detail.image.childImageSharp.fluid} />
        </div>
        <div className='store-thumbnail-header header'>{detail.name}</div>
      </Link>
    </StoreThumbnailWrapper>
  )
}

const StoreThumbnailWrapper = styled.div`
  margin: ${props => props.best ? '1.5rem 0' : '0'};

  a:hover .store-thumbnail-header {
    color: var(--red);
  }
  .store-thumbnail-container{
    margin-bottom: -2rem;
  }
  .store-thumbnail-container > div {
    height: 14rem;
  }
  .store-thumbnail-header {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--white);
    max-width: 90%;
    font-weight: 800;
    font-size: ${props => props.bestLatest ? '1.5rem' : '2rem'};
  }
`

export default StoreThumbnail
