import React from 'react'
import styled from 'styled-components'
import image1 from '../../images/example1.jpg'

const NavlinkHover = () => {
  return (
    <NavlinkHoverWrapper>
      <div className='title'>recent reviews</div>
      <NavlinkCardContainer>
        <NavlinkCard>
          <div className='img-container'>
            <img src={image1} alt='burger' />
          </div>
          <span className='name'>Burger Place 1</span>
        </NavlinkCard>
        <NavlinkCard>
          <div className='img-container'>
            <img src={image1} alt='burger' />
          </div>
          <span>Burger Place 2</span>
        </NavlinkCard>
        <NavlinkCard>
          <div className='img-container'>
            <img src={image1} alt='burger' />
          </div>
        </NavlinkCard>
        <NavlinkCard>
          <div className='img-container'>
            <img src={image1} alt='burger' />
          </div>
        </NavlinkCard>
        <NavlinkCard>
          <div className='img-container'>
            <img src={image1} alt='burger' />
          </div>
        </NavlinkCard>
        <NavlinkCard>
          <div className='img-container'>
            <img src={image1} alt='burger' />
          </div>
        </NavlinkCard>
      </NavlinkCardContainer>
    </NavlinkHoverWrapper>
  )
}

const NavlinkHoverWrapper = styled.div`
  width: 1170px;
  margin: 4rem auto 0;
  background: var(--white);
  border: 1px solid var(--grey);
  padding: 1rem 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  .title {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
`

const NavlinkCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1.5rem;
`

const NavlinkCard = styled.div`
  .name {
    color: var(--red);
    font-size: 0.9rem;
  }
`

export default NavlinkHover