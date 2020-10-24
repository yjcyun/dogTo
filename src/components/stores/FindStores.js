import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FormInput from '../default/FormInput'
import FormSelect from '../default/FormSelect'
import Pagination from './Pagination'
import StoreList from './StoreList'

const FindStores = ({ nodes, totalCount }) => {
  // for search by address
  const [data] = useState(nodes);
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('all');
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    const filterBySearch = () => {
      let tempStores = [...data];

      if (address !== '') {
        tempStores = tempStores.filter(store => store.frontmatter.address.toLowerCase().includes(address.toLowerCase()));
      }
      if (category !== 'all') {
        tempStores = tempStores.filter(store => store.frontmatter.category.toLowerCase().includes(category.toLowerCase()));
      }

      setFilteredData(tempStores);
    }

    filterBySearch();
  }, [address, category, data]);

  // handle input value
  const handleChange = e => {
    if (e.target.name === 'category') {
      setCategory(e.target.value);
    } else if (e.target.name === 'address') {
      setAddress(e.target.value);
    }
  }

  // search by category options
  let uniqueCategories = new Set(data.map(el => el.frontmatter.category));
  uniqueCategories = Array.from(uniqueCategories);
  uniqueCategories = ['all', ...uniqueCategories];

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentData = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  
  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <FindStoresWrapper>
        <h2 className='find-store-header header'>Find a business:</h2>
        <form>
          <FormSelect
            options={uniqueCategories}
            handleChange={handleChange}
          />
          <FormInput
            placeholder='By Address'
            handleChange={handleChange}
            text='Try Yonge, Bloor, or Finch'
          />
        </form>
      </FindStoresWrapper>
      <FindStoresMapWrapper>
        <h3 className='find-store-map-header header'>All reviews for businesses <span>{6 * (currentPage - 1) + 1}-{currentPage * 6} (of {totalCount})</span>
        </h3>
        {/* Store list */}
        <StoreList
          filteredData={currentData}
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