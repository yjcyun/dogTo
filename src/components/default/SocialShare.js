import React from 'react'
import articleButtons from '../../constants/articleButtons'
import ButtonSolid from './ButtonSolid'

const SocialShare = () => {
  return (
    <>
      {articleButtons.map(({ style, text, icon }) => (
        <ButtonSolid style={style} text={text} icon={icon} />
      ))}
    </>
  )
}

export default SocialShare