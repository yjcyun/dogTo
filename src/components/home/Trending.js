import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'

const Trending = () => {
  return (
    <div>
      <div className='trending-header'>
        <FiTrendingUp className='icon text-red' />
        <h4>Trending</h4>
      </div>
    </div>
  )
}

export default Trending
