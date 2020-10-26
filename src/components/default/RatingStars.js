import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import styled from 'styled-components'

const RatingStars = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <RatingStarsWrapper>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type='radio'
              name='rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className='star'
              color={ratingValue <= (hover || rating) ? 'var(--red)' : 'var(--grey)'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)} 
              />
          </label>
        )
      })}

    </RatingStarsWrapper>
  )
}

const RatingStarsWrapper = styled.div`
  font-size: 2rem;
  .star {
    cursor: pointer;
  }
  input[type='radio'] {
    display: none;
  }
`

export default RatingStars