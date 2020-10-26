import React from 'react'
import StoreThumbnail from '../stores/StoreThumbnail'

const BestFeatured = ({ data }) => {
  return (
    <div>
      <h2 className='header'>Featured Best</h2>
      {data
        .filter(el => el.frontmatter.featured === true)
        .sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1)
        .map(el => (
          <StoreThumbnail key={el.id} detail={el.frontmatter} best />
        ))
      }
    </div>
  )
}

export default BestFeatured
