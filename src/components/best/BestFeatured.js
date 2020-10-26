import React from 'react'
import StoreThumbnail from '../stores/StoreThumbnail'

const BestFeatured = ({ data }) => {
  return (
    <div>
      <h4 className='subtitle header'>Featured Best</h4>
      {data
        .filter(el => el.frontmatter.featured === true)
        .sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1)
        .map(el => (
          <StoreThumbnail key={el.id} detail={el.frontmatter} bestFeatured />
        ))
      }
    </div>
  )
}

export default BestFeatured
