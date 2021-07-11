import Star from './Star.js'
import { useState } from 'react'

function StarRating(props) {
  const { totalStars = 5 } = props

  // useState
  const [selectedStars] = useState(3)

  return (
    <>
      {[...Array(totalStars)].map((nothing, index) => <Star key={index} selected={ selectedStars > index } />)}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  )
}

export default StarRating;
