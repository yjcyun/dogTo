import React from 'react'
import styled from 'styled-components'

const FormInput = ({placeholder}) =>
  <FormInputWrapper type='text' placeholder={placeholder} />

const FormInputWrapper = styled.input`
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
`

export default FormInput