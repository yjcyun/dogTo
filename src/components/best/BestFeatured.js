import React from 'react'
import StoreThumbnail from '../stores/StoreThumbnail'

const BestFeatured = ({ data }) => {

  return (
    <div>
      <h2 className='header'>Featured Best</h2>
      {data
        .filter(el => el.frontmatter.featured === true)
        .map(el => (
          <StoreThumbnail key={el.id} detail={el.frontmatter} />
        ))
      }
    </div>
  )
}

export default BestFeatured
