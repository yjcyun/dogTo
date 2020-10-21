import React from 'react'
import { FaFacebookF, FaTwitter, FaBookmark } from 'react-icons/fa'

const SocialShare = () => {
  return (
    <>
      <button className='facebook'>
        <FaFacebookF className='icon' />
        <span>Share</span>
      </button>
      <button className='twitter'>
        <FaTwitter className='icon' />
        <span>Tweet</span>
      </button>
      <button className='share'>
        <FaBookmark className='icon' />
        <span>Save this Article</span>
      </button>
    </>
  )
}

export default SocialShare