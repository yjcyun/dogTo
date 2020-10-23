import React from 'react'
import styled from 'styled-components'
import articleButtons from '../../constants/articleButtons'
import ButtonDefault from './ButtonDefault'
import ButtonSolid from './ButtonSolid'

const SocialShare = ({ solid }) => {
  return (
    <SocialShareButtons>
      {articleButtons.map(({ style, text, icon }, index) => (
        solid
          ? <ButtonSolid key={index} style={style} text={text} icon={icon} />
          : <ButtonDefault key={index} style={style} text={text} icon={icon} />
      ))}
    </SocialShareButtons>
  )
}

const SocialShareButtons = styled.div`
  .default-btn{
    font-size: 1rem;
    margin-right: 3rem;
    color: var(--black);
    .icon {
      margin-right: 0.5rem;
      font-size: 1.5rem;
      transition: 0.2s;
    }
  }
  .default-btn.facebook:hover {
    color: var(--facebook);
  }
  .default-btn.twitter:hover {
    color: var(--twitter);
  }
  .default-btn.share:hover {
    color: var(--red);
  }
`

export default SocialShare