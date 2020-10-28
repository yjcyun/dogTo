import { Link } from 'gatsby'
import { VscChromeClose } from 'react-icons/vsc'
import React from 'react'
import styled from 'styled-components'

const Sidebar = ({ sideBar, setSideBar }) => {
  return (
    <SidebarWrapper sideBar={sideBar}>
      <ul className='nav-links'>
        <li onClick={() => setSideBar(!sideBar)}><Link to='/'>Home</Link></li>
        <li onClick={() => setSideBar(!sideBar)}><Link to='/best'>best of toronto</Link></li>
        <li onClick={() => setSideBar(!sideBar)}><Link to='/stores'>stores</Link></li>
        <li onClick={() => setSideBar(!sideBar)}><Link to='/news'>latest news</Link></li>
      </ul>
      <VscChromeClose className='icon' onClick={() => setSideBar(!sideBar)} />
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100;
  transition: 0.2s ease;
  transform: ${props => props.sideBar ? 'translateX(0)' : 'translateX(100%)'};

  .nav-links {
    padding: 3rem 2rem;
    li {
      margin: 0.5rem 0;
    }
    a {
      color: var(--white);
      text-decoration: none;
      font-family: var(--heading-ff);
      font-size: 1.5rem;
      text-transform: capitalize;
      font-weight: 700;
    }
  }
  .icon {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: var(--white);
    font-size: 1.3rem;
  }
`

export default Sidebar
