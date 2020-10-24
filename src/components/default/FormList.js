import React from 'react'
import styled from 'styled-components'

const FormList = ({ options, handleChange, name, placeholder }) => {
  return (
    <FormListWrapper>
      <SelectWrapper
        type='text'
        list={name}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <datalist id={name}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </datalist>
    </FormListWrapper>
  )
}

const FormListWrapper = styled.div`
  display: flex;
  margin: 0 0.5rem;
  position: relative;
  overflow: hidden;

  &:after {
    content:'\25BC';
    position: absolute;
    background:#00639d;
    top: 0;
    right: 0;
    padding: 0.5rem;
    pointer-events: none;
    height: 100%;
    transition: 0.2s all ease;
  }
`

const SelectWrapper = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 1rem;
  border: 2px solid var(--light-grey);
  width: 100%;
  margin-bottom: 0.5rem;
  outline: none;
  font-size: 1.2rem;
  color: var(--dark-grey);
  font-family: var(--primary-ff);
  cursor: pointer;
`

export default FormList