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

`

export default ButtonSolid
