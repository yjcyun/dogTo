import React from 'react'
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
  }
`

export default Sidebar
