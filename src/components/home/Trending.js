import React from 'react'
import { FiTrendingUp } from 'react-icons/fi'
import styled from 'styled-components'

const Trending = () => {
  return (
    <TrendingWrapper>
      <h4 className='subheader'>
        <span><FiTrendingUp className='icon text-red' /></span>
        Trending posts this week
      </h4>
      <ul className='trending-articles-container'>
        <li>
          <a href='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aperiam!</a>
        </li>
        <li>
          <a href='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aperiam!</a>
        </li>
        <li>
          <a href='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aperiam!</a>
        </li>

      </ul>
    </TrendingWrapper>
  )
}

const TrendingWrapper = styled.div`
  margin-top: 2rem;

  h4 {
    font-family: var(--secondary-heading-ff);
    color: var(--dark-grey);
    margin-bottom: 1rem;
    span {
      margin-right: 0.5rem;
      font-size: 1.5rem;
    }
  }

  .trending-articles-container {
    li{
      padding: 0.7rem 0;
      border-top: 1px solid var(--light-grey);
    }
    li:hover a {
      text-decoration: underline;
      color: var(--red);
    }
    a{
      text-decoration: none;
      color: var(--dark-grey);
    }
  }
`

export default Trending
