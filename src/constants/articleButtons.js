import React from 'react'
import { FaFacebookF, FaTwitter, FaBookmark } from 'react-icons/fa'

export default [
  {
    icon: <FaFacebookF className='icon'/>,
    style: 'facebook',
    text: 'Share'
  },
  {
    icon: <FaTwitter className='icon'/>,
    style: 'twitter',
    text: 'Tweet'
  },
  {
    icon: <FaBookmark className='icon'/>,
    style: 'share',
    text: 'Save this article'
  }
]
