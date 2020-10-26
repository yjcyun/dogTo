import { Link } from 'gatsby'
import React, { createRef, useRef, useState } from 'react'
import styled from 'styled-components'

const Directory = ({ data }) => {


  // render unique value of alphabet index
  const getUniqueAlphabet = data => {
    const index = 9;
    let tempListNameArr = data
      .map(({ frontmatter }) => frontmatter.name)
      .map(el => el.charAt(index));

    const tempAlphabets = new Set(tempListNameArr);
    let alphabets = Array.from(tempAlphabets);
    return alphabets = [...alphabets];
  }

  // render ordered list of data
  const renderOrderedList = alphabet => {
    return data.map(({ frontmatter, id }) => {
      if (frontmatter.name.charAt(9) === alphabet) {
        return (
          <li className='ordered-list-item' key={id}>
            <Link to={`/best/${frontmatter.slug}`}>{frontmatter.name}</Link>
          </li>
        );
      }
    });
  }

  // Scroll to specified alphabet
  const scrollHandler = (index) => {
    alphabetRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // States
  const [alphabetHeader] = useState(getUniqueAlphabet(data));
  const [currentAlphabet, setCurrentAlphabet] = useState(alphabetHeader[0]);
  const alphabetRef = useRef([]);

  return (
    <DirectoryWrapper>
      <h2 className='header'>All from Best of Toronto</h2>
      <div className='best-directory'>
        {/* Sort tabs */}
        <div className='sort-tabs-container'>
          <div className='sort-tabs-label'>Sort by: </div>
          <ul className='sort-tabs header'>
            <li className='sort-tab active'>A-Z</li>
            <li className='sort-tab'>Popularity</li>
            <li className='sort-tab'>most recent</li>
          </ul>
        </div>
        {/* Directory list */}
        <div className='directory-list-container'>
          {/* list */}
          <div className='alphabetical-list-container'>
            <ol className='alphabetical-list'>
              {alphabetHeader.map((item, index) => (
                <li
                  ref={el => alphabetRef.current[index] = el}
                  className='alphabetical-list-item'
                  key={item}
                >
                  <p className='alphabetical-list-item-letter header'>{item}</p>
                  <div className='ordered-list-container'>
                    <ol className='ordered-list'>
                      {renderOrderedList(item)}
                    </ol>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          {/* alphabet index */}
          <ol className='letter-index-list header'>
            {alphabetHeader.map((item, index) => (
              <li
                className={`${currentAlphabet === item && 'active'} letter-index-list-item`}
                key={item}
                onClick={() => {
                  setCurrentAlphabet(item);
                  scrollHandler(index);
                }}
              >{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </DirectoryWrapper>
  )
}

const DirectoryWrapper = styled.div`
  .sort-tabs-container{
    display: flex;
    justify-content:flex-end;
    align-items: center;
    border-top: 1px solid var(--light-grey);
    border-bottom: 3px solid var(--black);
    margin-top: 1rem;
  }

  .sort-tabs {
    display: flex;
    align-items: center;
  }

  .sort-tab{
    margin-left: 2px;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
    background: var(--grey);
    color: #fff;
    padding: 1rem;
    cursor: pointer;
    &:hover {
      background: var(--red);
    }
    &.active {
      background: var(--black);
    }
  }

  .directory-list-container {
    display: flex;
    a {
      text-decoration: none;
      color: var(--black);
      &:hover {
        text-decoration: underline;
        color: var(--red);
      }
    }
  }

  .alphabetical-list-container {
    width: 100%;
    margin-right: 0.5rem;
    .alphabetical-list{
      overflow-y: auto;
      height: 30rem;
      padding-right: 3rem;
    }
    .ordered-list-item{
      padding:0.5rem 0;
      border-bottom: 1px solid var(--light-grey);
    }
    .alphabetical-list-item-letter{
      font-weight: 700;
      font-size: 1.5rem;
      margin: 1rem 0 0.3rem;
    }
  }

  .letter-index-list {
    width: 20px;
    margin-top: 1rem;
    .letter-index-list-item {
      cursor: pointer;
      display: flex;
      justify-content: center;
      color: var(--black);
      font-weight: 700;
      padding: 2px;
      font-size: 0.9rem;
      &.active {
        background: var(--red);
        color: white;
      }
    }
  }
`

export default Directory
