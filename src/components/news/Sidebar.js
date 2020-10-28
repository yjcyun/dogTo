import React from 'react'
import styled from 'styled-components'
import SocialShare from '../default/SocialShare'
import Subscribe from './Subscribe'

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Subscribe sidebar heading='Stay in the loop'>
        Sign up for our free email newsletter. <br />
      Unsubscribe anytime or <a href="/">contact us</a> for details
      </Subscribe>
      <div className='article-cta-buttons'>
        <SocialShare solid />
      </div>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div`
  order: 2;

  .article-cta-buttons{
    margin-top: 4rem;
  }

  @media(min-width: 768px) {
    order: 1;
  }
`

export default Sidebar
