import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const NavlinkHover = ({ setNavbox, data, link }) => {
  
  return (
    <NavlinkHoverWrapper
      onMouseEnter={() => setNavbox(true)}
      onMouseLeave={() => setNavbox(false)}
    >
      <div className='title'>recent reviews</div>
      <NavlinkCardContainer>
        {data.slice(0, 6).map(el => (
          <NavlinkCard
            key={el.id}
            to={`/${link}/${el.frontmatter.slug}`}
          >
            <div className='img-container'>
              <Image fluid={el.frontmatter.image.childImageSharp.fluid} />
            </div>
            <span className='name'>{el.frontmatter.name}</span>
          </NavlinkCard>
        ))}

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

const NavlinkCard = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: underline;
    color: var(--red);
  }
  .name {
    color: var(--red);
    font-size: 0.9rem;
  }
  .img-container > div{
    height: 90px;
  }
`

export default NavlinkHover