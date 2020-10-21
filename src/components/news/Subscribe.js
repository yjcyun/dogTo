import React from 'react'
import styled from 'styled-components'

const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <div className='subscribe-left'>
        <h2 className='header'>Get more news delivered to your inbox</h2>
        <p>You can unsubscribe anytime or <a href='/'>contact us</a> for details</p>
      </div>
      <form>
        <input type='text' placeholder='Email address' />
        <button>Subscribe</button>
      </form>
    </SubscribeWrapper>
  )
}

const SubscribeWrapper = styled.div`
  background: var(--bcg-grey);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  h2 {
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p{
    font-size: 0.9rem;
    a {
      color: var(--red);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  form {
    input {
      padding: 1rem;
      border: 2px solid var(--light-grey);
      width: 100%;
      margin-bottom: 0.5rem;
      outline: none;
      font-size: 1.2rem;
      color: var(--dark-grey);
      font-family: var(--primary-ff);
      &:focus {
        border: 2px solid var(--red);
      }
    }
    button {
      background: var(--red);
      color: var(--white);
      padding: 1rem;
      transition: 0.2s;
      &:focus {
        outline: none;
      }
      &:hover {
        background: var(--black);
      }
    }
  }
`

export default Subscribe