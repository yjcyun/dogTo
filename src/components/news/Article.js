import React from 'react'
import { FaFacebookF, FaTwitter, FaBookmark } from 'react-icons/fa'
import image1 from '../../images/example1.jpg'
import styled from 'styled-components'
import Subscribe from './Subscribe'

const Article = () => {
  return (
    <>
      <ArticleHeadingWrapper>
        <div className='article-hub'>
          <h4 className='article-category text-red'>City</h4>
          <span className='article-author'>Jane Doe</span>
          <span className='article-posted'>Posted 10 minutes ago</span>
        </div>
        <a href='mailto:abc@email.com' className='article-report'>Report Inaccuracy</a>
      </ArticleHeadingWrapper>
      <ArticleDetailTitle>
        <div className='article-header header'>
          An update for pet owners: More brands of dog food recalled beacuse they may be toxic
        </div>
        <div className='article-img-container'>
          <img src={image1} alt='img' />
        </div>
      </ArticleDetailTitle>
      <ArticleDetailBody>
        <div className='article-sidebar'>
          <Subscribe sidebar heading='Stay in the loop'>
            Sign up for our free email newsletter. <br />
            Unsubscribe anytime or <a href="/">contact us</a> for details
          </Subscribe>
          <div className='article-cta-buttons'>
            <button>
              <div>Share</div>
              <FaFacebookF className='icon' />
            </button>
            <button>
              <span>Tweet</span>
              <FaTwitter className='icon' />
            </button>
            <button>
              <span>Share</span>
              <FaBookmark className='icon' />
            </button>
          </div>
        </div>
        <div className='article-body'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit. Provident possimus, voluptas adipisci natus perspiciatis commodi a ad doloremque vel id laborum amet exercitationem labore ipsam est deserunt voluptate officiis. Corrupti, autem deleniti eaque quasi eos maxime ipsum odit esse minima dolorem, numquam aliquam obcaecati soluta temporibus beatae consequatur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit. Provident possimus, voluptas adipisci natus perspiciatis commodi a ad doloremque vel id laborum amet exercitationem labore ipsam est deserunt voluptate officiis. Corrupti, autem deleniti eaque quasi eos maxime ipsum odit esse minima dolorem, numquam aliquam obcaecati soluta temporibus beatae consequatur.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, impedit. Provident possimus, voluptas adipisci natus perspiciatis commodi a ad doloremque vel id laborum amet exercitationem labore ipsam est deserunt voluptate officiis. Corrupti, autem deleniti eaque quasi eos maxime ipsum odit esse minima dolorem, numquam aliquam obcaecati soluta temporibus beatae consequatur.</p>
          <div className='article-credit'><span>Lead photo by</span> Jane Doe</div>
        </div>
      </ArticleDetailBody>
    </>
  )
}
const ArticleHeadingWrapper = styled.div`
  margin: 1rem 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--light-grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .article-hub{
    display: flex;
    align-items: center;
  }
  .article-author {
    margin-right: 0.8rem;
  }
  .article-category {
    margin-right: 4rem;
    font-family: var(--secondary-heading-ff);
    display: inline-block;
    font-size: 1.5rem;
  }
  .article-posted, .article-author {
    font-size: 0.8rem;
  }
  .article-report {
    color: var(--grey);
    font-size: 0.8rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

const ArticleDetailTitle = styled.section`
  .article-header {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--white);
    width: 90%;
    font-weight: 800;
    font-size: 3rem;
  }
  .article-img-container {
    margin-top: -4rem;
  }
`

const ArticleDetailBody = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 4rem;
  padding: 4rem 0;

  .article-sidebar {
    .article-cta-buttons{
      margin-top: 4rem;
      button {
        width: 100%;
        padding: 1rem; 
        background: var(--black);
        margin: 0.5rem 0;
        display: flex;
        justify-content: space-between;
        color: var(--white);
        font-size: 1.2rem;
        transition: 0.2s;
        .icon {
          transition: 0.2s;
        }
        &:hover {
          background: var(--red);
        }
        &:hover .icon {
        transform: translateX(-1rem);
        }
      }
    }
  }

  .article-body {
    border-bottom: 1px solid var(--bcg-grey);
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    p {
      line-height: 2;
      margin-bottom: 2rem;
    }
    .article-credit {
      font-size: 0.8rem;
      span {
        color: var(--grey);
      }
    }
  }
`

export default Article