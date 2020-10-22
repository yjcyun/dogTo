import React from 'react'
import styled from 'styled-components'

const ButtonSolid = ({ style, text, icon }) => {
  return (
    <ButtonSolidWrapper className={style}>
      {icon}
      <span>{text}</span>
    </ButtonSolidWrapper>
  )
}

const ButtonSolidWrapper = styled.button`
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
    order: 2;
  }
  &:hover {
    background: var(--red);
  }
  &:hover .icon {
  transform: translateX(-1rem);
  }
`

export default ButtonSolid
