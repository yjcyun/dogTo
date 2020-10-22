import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import FormInput from '../default/FormInput'
import FormSelect from '../default/FormSelect'
import image from '../../images/example1.jpg'

const FindStores = () => {
  return (
    <>
      <FindStoresWrapper>
        <h2 className='find-store-header header'>Find a business:</h2>
        <form>
          <FormSelect />
          <FormInput placeholder='By Address' />
        </form>
      </FindStoresWrapper>
      <FindStoresMapWrapper>
        <h3 className='find-store-map-header header'>All reviews for businesses <span>1-6 (of 12)</span></h3>
        <div className='store-lists'>
          <ul>
            <li>
              <Link to='/' className='store-list'>
                <div className='store-list-image'>
                  <img src={image} alt='store' />
                </div>
                <div className='store-list-detail header'>
                  <h4 className='header'>Petsmart</h4>
                  <h5 className='text-red header'>Store</h5>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/' className='store-list'>
                <div className='store-list-image'>
                  <img src={image} alt='store' />
                </div>
                <div className='store-list-detail header'>
                  <h4 className='header'>Petsmart</h4>
                  <h5 className='text-red header'>Store</h5>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/' className='store-list'>
                <div className='store-list-image'>
                  <img src={image} alt='store' />
                </div>
                <div className='store-list-detail header'>
                  <h4 className='header'>Petsmart</h4>
                  <h5 className='text-red header'>Store</h5>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/' className='store-list'>
                <div className='store-list-image'>
                  <img src={image} alt='store' />
                </div>
                <div className='store-list-detail header'>
                  <h4 className='header'>Petsmart</h4>
                  <h5 className='text-red header'>Store</h5>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/' className='store-list'>
                <div className='store-list-image'>
                  <img src={image} alt='store' />
                </div>
                <div className='store-list-detail header'>
                  <h4 className='header'>Petsmart</h4>
                  <h5 className='text-red header'>Store</h5>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/' className='store-list'>
                <div className='store-list-image'>
                  <img src={image} alt='store' />
                </div>
                <div className='store-list-detail header'>
                  <h4 className='header'>Petsmart</h4>
                  <h5 className='text-red header'>Store</h5>
                </div>
              </Link>
            </li>
          </ul>
          <div className='map'>Map</div>
        </div>
      </FindStoresMapWrapper>
    </>
  )
}

const FindStoresWrapper = styled.section`
  background: var(--bcg-grey-2);
  padding: 2rem 1rem;

  .find-store-header {
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

const FindStoresMapWrapper = styled.section`
  padding: 2rem;
  .find-store-map-header {
    font-size: 1.5rem;
  }
  .store-lists {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 0;
    padding: 0 1rem;
    border-top: 3px solid var(--black);
    border-bottom: 3px solid var(--black);
    height: 30rem;
    ul {
      overflow: auto; 
    }
  }
  .store-list {
    display: grid;
    grid-template-columns: 1fr 2fr;
    text-decoration: none;
    background: var(--bcg-grey-2);
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--light-grey);
    transition: 0.2s all ease;
    &:hover {
      background: var(--white);
    }
  }
  .store-list-detail{
    margin-left: 1rem;
    h4 {
      font-size: 1.2rem;
      margin-bottom: 0.7rem;
    }
    h5 {
      font-size: 1.1rem;
    }
  }
`

export default FindStores
