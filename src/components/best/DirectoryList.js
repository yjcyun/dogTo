import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const DirectoryList = ({ frontmatter}) => {
  return (
    <DirectoryListWrapper>
      <li className='ordered-list-item'>
        <Link to={`/best/${frontmatter.slug}`}>{frontmatter.name}</Link>
      </li>
    </DirectoryListWrapper>
  )
}

const DirectoryListWrapper = styled.ol`
  .ordered-list-item {
    padding:0.5rem 0;
    border-bottom: 1px solid var(--light-grey);
  }
`

export default DirectoryList
