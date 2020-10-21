import React from 'react'
import { FaBookmark, FaFacebookF, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import SocialShare from '../default/SocialShare'
import Subscribe from '../news/Subscribe'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Subscribe sidebar heading='Stay in the loop'>
        Sign up for our free email newsletter. <br />
      Unsubscribe anytime or <a href="/">contact us</a> for details
      </Subscribe>
      <div className='article-cta-buttons'>
        <SocialShare />
      </div>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  .article-cta-buttons{
    margin-top: 4rem;
    button {
      width: 100%;
      padding: 1rem; 
      background: var(--black);
      margin: 0.5rem 0;
      display: flex;
      justify-content: space-between;
      color: var(--white);
      font-size: 1.2rem;
      transition: 0.2s;
      .icon {
        transition: 0.2s;
        order: 2;
      }
      &:hover {
        background: var(--red);
      }
      &:hover .icon {
      transform: translateX(-1rem);
      }
    }
  }
`

export default Sidebar
