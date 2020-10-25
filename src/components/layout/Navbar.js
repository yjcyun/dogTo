import React, { useState } from 'react'
import { Link } from 'gatsby'
import { BiUser, BiUserVoice } from 'react-icons/bi'
import { BiSearch, BiSearchAlt } from 'react-icons/bi'
import styled from 'styled-components'
import StoreLinkHover from './StoreLinkHover'
import ArticleLinkHover from './ArticleLinkHover'

const Navbar = () => {
  const [hoverBtnUser, setHoverBtnUser] = useState(false);
  const [hoverBtnSearch, setHoverBtnSearch] = useState(false);
  const [storeNavbox, setStoreNavbox] = useState(false);
  const [articleNavbox, setArticleNavbox] = useState(false);

  return (
    <NavbarWrapper className='header'>
      {storeNavbox && <StoreLinkHover setStoreNavbox={setStoreNavbox} />}
      {articleNavbox && <ArticleLinkHover setArticleNavbox={setArticleNavbox} />}
      <div className='header-container'>
        <div className='header-left'>
          <Link to='/' className='logo-container text-red'>dogTO</Link>
        </div>
        <ul className='nav-links'>
          <li><Link to='/best'>best of toronto</Link></li>
          <li
            onMouseEnter={() => setStoreNavbox(true)}
            onMouseLeave={() => setStoreNavbox(false)}
          >
            <Link to='/stores'>stores</Link>
          </li>
          <li
            onMouseEnter={() => setArticleNavbox(true)}
            onMouseLeave={() => setArticleNavbox(false)}
          >
            <Link to='/news'>latest news</Link>
          </li>
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
  background: var(--white);

  .header-container{
    max-width: var(--max-width);
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
    font-weight: 800;
    text-decoration: none;
  }

  .nav-links {
    align-items: center;
    li{
      height: 4rem;
      display: flex;
      align-items: center;
      margin: 0 0.5rem;
      font-family: var(--secondary-heading-ff);
    }
    li:hover a{
      color: var(--red);
      text-decoration: underline;
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
      color: var(--red);
      font-size: 1.3rem;
      padding: 1rem;
    }
    button:hover {

    }
  }
`

export default Navbar