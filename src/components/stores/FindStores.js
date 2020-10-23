import React, { useState } from 'react'
import styled from 'styled-components'
import FormInput from '../default/FormInput'
import FormSelect from '../default/FormSelect'
import Pagination from './Pagination'
import StoreList from './StoreList'

const searchingForm = term => x => x.frontmatter.address.toLowerCase().includes(term.toLowerCase()) || !term;

const FindStores = ({ nodes, totalCount }) => {
  // for search
  const [data] = useState(nodes);
  const [q, setQ] = useState('');
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost);
  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <FindStoresWrapper>
        <h2 className='find-store-header header'>Find a business:</h2>
        <form>
          <FormSelect />
          <FormInput
            placeholder='By Address'
            setQ={setQ}
            text='Try Yonge, Bloor, or Finch'
          />
        </form>
      </FindStoresWrapper>
      <FindStoresMapWrapper>
        <h3 className='find-store-map-header header'>All reviews for businesses <span>{6 * (currentPage - 1) + 1}-{currentPage * 6} (of {totalCount})</span>
        </h3>
        {/* Store list */}
        <StoreList
          currentData={currentData}
          searchingForm={searchingForm}
          q={q}
        />
        {/* Pagination */}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalCount}
          currentPage={currentPage}
          paginate={paginate}
          indexOfLastPost={indexOfLastPost}
        />
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
`

export default FindStores