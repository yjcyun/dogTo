import React from 'react'

const ButtonDefault = ({ style, text, icon }) => {
  return (
    <button className={`${style} default-btn`}>
      {icon}
      <span>{text}</span>
    </button>
  )
}

export default ButtonDefault