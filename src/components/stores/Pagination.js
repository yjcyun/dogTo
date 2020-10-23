import React from 'react'
import styled from 'styled-components';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {

  const numOfPages = Math.ceil(totalPosts / postsPerPage);
  const lastPage = currentPage === numOfPages;
  const pageNumbers = [];

  for (let i = 1; i <= numOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationWrapper className='header'>
      {pageNumbers.map(page => (
        <button
          key={page}
          type='button'
          className={`${page === currentPage ? 'active' : 'muted'} navpages header`}
          onClick={() => paginate(page)}
        >
          {page}
        </button>
      ))}

      <button
        type='button'
        className={`${lastPage && 'hide'} navpages next-btn header`}
        onClick={() => paginate(currentPage + 1)}
      >
        <span>Next 6 Reviews</span>
      </button>
    </PaginationWrapper>
  )
}

const PaginationWrapper = styled.div`
  .navpages {
    text-decoration: none;
    font-weight: 700;
    cursor: pointer;
    padding: 0 1rem;
    font-size: 1.1rem;
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

export default Pagination