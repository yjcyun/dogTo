import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='footer-container'>
        <div className='footer-links'>
          <ul className='footer-internal-links'>
            <li>
              <a href='/'>Contact Us</a>
            </li>
            <li>
              <a href='/'>Archives</a>
            </li>
            <li>
              <a href='/'>Jobs</a>
            </li>
          </ul>
          <ul className='footer-external-links'>
            <li>
              <a href='http://google.ca' target='_blank' rel='noreferrer' aria-label='facebook' arai='true'><FaFacebookF className='icon' /></a>
            </li>
            <li>
              <a href='http://google.ca' target='_blank' rel='noreferrer' aria-label='facebook' arai='true'><FaTwitter className='icon' /></a>
            </li>
            <li>
              <a href='http://google.ca' target='_blank' rel='noreferrer' aria-label='facebook' arai='true'><FaInstagram className='icon' /></a>
            </li>
            <li>
              <a href='http://google.ca' target='_blank' rel='noreferrer' aria-label='facebook' arai='true'><SiTiktok className='icon' /></a>
            </li>
            <li>
              <a href='http://google.ca' target='_blank' rel='noreferrer' aria-label='facebook' arai='true'><FaYoutube className='icon' /></a>
            </li>
          </ul>
        </div>
        <div className='footer-credit'>
          Site cloned from <a href='https://blogto.com'>blogTo</a>. Developed for practice purposes by <a href='https://christinayun.ca'>Christina Yun</a>.
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  a{
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  ul {
    display: flex;
    a{
      color: var(--black);
    }
  }
  .footer-internal-links{
    margin-bottom: 1rem;
    li {
      margin-right: 1rem;
      a:hover {
        color: var(--red);
      }
    }
  }
  .footer-external-links{
    li {
      margin-left: 1rem;
      a:hover {
        color: var(--dark-grey);
      }
      .icon {
        font-size: 1.8rem;
      }
    }
  }
  .footer-container{
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }
  .footer-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-credit{
    color: var(--grey);
    font-size: 0.8rem;
    a{
      color: #ff9a91;
      :hover {
        color: var(--red);
      }
    }
  }
`

export default Footer
