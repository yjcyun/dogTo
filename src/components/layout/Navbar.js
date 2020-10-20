import React, { useState } from 'react'
import { Link } from 'gatsby'
import { BiUser, BiUserVoice } from 'react-icons/bi'
import { BiSearch, BiSearchAlt } from 'react-icons/bi'
import styled from 'styled-components'

const Navbar = () => {
  const [hoverBtnUser, setHoverBtnUser] = useState(false);
  const [hoverBtnSearch, setHoverBtnSearch] = useState(false);

  return (
    <NavbarWrapper className='header'>
      <div className='header-container'>
        <div className='header-left'>
          <div className='logo-container'>dogTO</div>
        </div>
        <ul className='nav-links'>
          <li><Link to='/toronto'>best of toronto</Link></li>
          <li><Link to='/stores'>stores</Link></li>
          <li><Link to='/places'>places</Link></li>
          <li><Link to='/news'>latest news</Link></li>
          <li><Link to='/videos'>videos</Link></li>
        </ul>
        <div className='header-right'>
          <button
            onMouseEnter={() => setHoverBtnUser(true)}
            onMouseLeave={() => setHoverBtnUser(false)}
          >
            {hoverBtnUser
              ? <BiUserVoice className='icon' />
              : <BiUser className='icon' />}
          </button>
          <button
            onMouseEnter={() => setHoverBtnSearch(true)}
            onMouseLeave={() => setHoverBtnSearch(false)}
          >
            {hoverBtnSearch
              ? <BiSearchAlt className='icon' />
              : <BiSearch className='icon' />}
          </button>
        </div>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid var(--grey);

  .header-container{
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 0 0 1.5rem;
    display: flex;
    height: 4rem;
    justify-content: space-between;
    align-items: center;
  }

  .header-left, .nav-links {
    display: flex;
  }

  .logo-container {
    font-size: 2rem;
    color: var(--red);
    font-weight: 800;
  }

  .nav-links {
    align-items: center;
    li{
      margin: 0 0.5rem;
    }
    a{
      text-decoration: none;
      color: var(--grey);
      text-transform: uppercase;
      font-size: 0.9rem;
    }
  }

  .header-right {
    button {
      background: none;
      color: var(--red);
      border: none;
      font-size: 1.3rem;
      cursor: pointer;
      padding: 1rem;
    }
    button:hover {

    }
  }

`

export default Navbar
