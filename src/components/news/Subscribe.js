import React from 'react'
import styled from 'styled-components'
import FormInput from '../default/FormInput'
import FormList from '../default/FormList'

const Subscribe = ({ sidebar, heading, children, hideBtn, placeholder = 'Email Address', name, handleChange, select, options }) => {
 
  return (
    <SubscribeWrapper sidebar={sidebar}>
      <div className='subscribe-left'>
        <h2 className='header'>{heading}</h2>
        <p>{children}</p>
      </div>
      <form>
        {select
          ? <FormList
            placeholder={placeholder}
            name={name}
            handleChange={handleChange}
            options={options}
          />
          : <FormInput placeholder={placeholder} />
        }

        {hideBtn ? <span>Type the name of the place you're looking for.</span> : <button>Subscribe</button>}
      </form>
    </SubscribeWrapper>
  )
}

const SubscribeWrapper = styled.div`
  background: ${props => props.sidebar ? 'none' : 'var(--bcg-grey)'};
  padding: ${props => props.sidebar ? '0' : '2rem'};
  display: grid;
  grid-template-columns: ${props => props.sidebar ? '1fr' : '1fr 1fr'};
  grid-gap: 2rem;

  h2 {
    font-weight: 800;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p{
    font-size: 0.9rem;
    color: var(--dark-grey);
    a {
      color: var(--red);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  form {
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

  @media(min-width: 996px) {
    
  }
`

export default Subscribe