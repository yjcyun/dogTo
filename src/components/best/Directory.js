import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { sortByList } from '../../constants/sortByList'
import DirectoryList from './DirectoryList'

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
    return data
      .sort((a, b) => a.frontmatter.name > b.frontmatter.name ? 1 : -1)
      .filter(({ frontmatter }) => frontmatter.name.charAt(9) === alphabet)
      .map(({ frontmatter, id }) => (
        <DirectoryList key={id} frontmatter={frontmatter} />
      ));
  }

  // Scroll to specified alphabet
  const scrollHandler = (index) => {
    alphabetRef.current[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // States & refs
  const [alphabetHeader] = useState(getUniqueAlphabet(data));
  const [currentAlphabet, setCurrentAlphabet] = useState(alphabetHeader[0]);
  const [sortByIndex, setSortByIndex] = useState(0);
  const alphabetRef = useRef([]);

  return (
    <DirectoryWrapper>
      <h2 className='header'>All from Best of Toronto</h2>
      <div className='best-directory'>
        {/* Sort tabs */}
        <div className='sort-tabs-container'>
          <div className='sort-tabs-label'>Sort by: </div>
          <ul className='sort-tabs header'>
            {sortByList.map((el, id) => (
              <li key={id}>
                <button
                  className={`${sortByIndex === id ? 'active' : ''} sort-tab header`}
                  onClick={() => setSortByIndex(id)}>{el.text}</button>
              </li>
            ))}
          </ul>
        </div>
        {/* Directory list */}
        <div className='directory-list-container'>
          {/* list */}
          <div className='alphabetical-list-container'>
            <ol className='alphabetical-list'>
              {sortByIndex === 0 ?
                alphabetHeader
                  .sort((a, b) => a > b ? 1 : -1)
                  .map((item, index) => (
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
                  ))
                : sortByIndex === 1
                  ? data
                    .sort((a, b) => a.frontmatter.views < b.frontmatter.views ? 1 : -1)
                    .map((el, index) => (
                      <DirectoryList key={index} frontmatter={el.frontmatter} />))
                  : sortByIndex === 2
                  && data
                    .sort((a, b) => a.frontmatter.date < b.frontmatter.date ? 1 : -1)
                    .map((el, index) => (
                      <DirectoryList key={index} frontmatter={el.frontmatter} />))
              }
            </ol>
          </div>
          {/* alphabet index */}
          <ol className='letter-index-list header'>
            {alphabetHeader.map((item, index) => (
              <li key={item} >
                <button
                  onClick={() => {
                    setCurrentAlphabet(item);
                    scrollHandler(index);
                  }}
                  className={`${currentAlphabet === item && 'active'} letter-index-list-item header`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </DirectoryWrapper >
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
      width: 100%;
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