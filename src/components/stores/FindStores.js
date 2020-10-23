import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import FormInput from '../default/FormInput'
import FormSelect from '../default/FormSelect'

const FindStores = ({ stores, currentPage, nextPage, isLast, numOfPages, totalCount }) => {

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
        <h3 className='find-store-map-header header'>All reviews for businesses <span>{6 * (currentPage - 1) + 1}-{currentPage * 6} (of {totalCount})</span>
        </h3>
        <div className='store-lists'>
          <ul>
            {stores.map(({ id, frontmatter }) => (
              <li key={id}>
                <Link to={`/stores/${frontmatter.slug}`} className='store-list'>
                  <div className='store-list-image'>
                    <Image fluid={frontmatter.image.childImageSharp.fluid} />
                  </div>
                  <div className='store-list-detail header'>
                    <h4 className='header'>{frontmatter.name}</h4>
                    <h5 className='text-red header'>{frontmatter.category}</h5>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className='map'>Map</div>
        </div>
        {/* Pagination */}
        <div className='page-numbers header'>
          {Array.from({ length: numOfPages }, (_, index) => {
            return (
              <Link
                key={index}
                to={`/stores/${index === 0 ? '' : index + 1}`}
                className={`${index + 1 === currentPage ? 'active' : 'muted'} navpages`}
              >
                {index + 1}
              </Link>
            )
          })}
          <Link to={nextPage} className={`${isLast && 'hide '} navpages next-btn`}>
            <span>Next 6 Reviews</span>
          </Link>
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
    padding: 1rem 0;
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

  .navpages {
    margin-right: 1.5rem;
    text-decoration: none;
    font-weight: 700;
  }
  .navpages.active {
    color: var(--black);
  }
  .navpages.muted, .navpages.next-btn {
    color: var(--red);
    &:hover {
      color: var(--black);
    }
  }
  .hide {
    display: none;
  }
`

export default FindStores
