import React from 'react'
import styled from 'styled-components'
import { FaRegStar, FaStar } from 'react-icons/fa'
import ButtonSolid from '../default/ButtonSolid'
import storeButtons from '../../constants/storeButtons'
import { Link } from 'gatsby'
import RatingStars from '../default/RatingStars'

const StoreSidebar = (props) => {
  const {
    mdx: {
      frontmatter: { name, category, address, rating, website, phone, city } }
  } = props;

  let formatedPhone = phone.toString();
  formatedPhone = `${formatedPhone.substring(0, 3)}.${formatedPhone.substring(3, 6)}.${formatedPhone.substring(6, 11)}`

  return (
    <StoreSidebarWrapper>
      <div className='sticky'>
        <h4 className='header'>{name}</h4>
        <div className='store-badge-container'>
          <div className='store-badge-item'>
            <Link to='/'>{address}</Link>
          </div>
          <div className='store-badge-item contact'>
            <div className='store-badge-item store-badge-contact'><Link to='/'>{formatedPhone}</Link></div>
            <div className='store-badge-item store-badge-contact'><a href={website} target='_blank' rel='noreferrer'>Website</a></div>
          </div>
          <div className='store-badge-item'>
            <Link to='/'>{city}</Link>
          </div>
          <div className='store-badge-item'>
            <Link to='/'>{category}</Link>
          </div>
        </div>
        <div className='store-ratings'>
          <span>Rate this: </span>
          <RatingStars />
        </div>
        <div className='store-ratings-avg'>
          <span>Average Rating: </span>{rating.toFixed(1)}
        </div>
        <div className='store-cta-btn'>
          {storeButtons.map(el => <ButtonSolid text={el.text} icon={el.icon} />)}
        </div>
      </div>
    </StoreSidebarWrapper>
  )
}


const StoreSidebarWrapper = styled.aside`
  .sticky{
    position: sticky;
    top: 8rem;
    margin-bottom: 10rem;
  }
  
  a {
    text-decoration: none;
    color: var(--red);
    font-size: 0.8rem;
    :hover {
      text-decoration: underline;
    }
  }

  .store-badge-container {
    margin-top: 1rem;
  }
  .store-badge-item {
    border-bottom: 1px solid var(--light-grey);
    padding: 0.5rem 0;
  }
  .store-badge-item.contact {
    display: flex;
  }
  .store-badge-item.store-badge-contact {
    border-bottom: none;
    padding: 0;
    &:first-child {
      border-right: 1px solid var(--light-grey);
      padding-right: 0.5rem;
    }
    &:last-child {
      padding-left: 0.5rem;
    }
  }
  .store-ratings, .store-ratings-avg {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    span {
      color: var(--dark-grey);
      font-size: 0.8rem;
      margin-right: 0.5rem;
    }
  }
  
  .store-cta-btn {
    margin-top: 2rem;
  }
`

export default StoreSidebar
