import Star from './Star.js'
// import { useState } from 'react'

function StarRating(props) {
  const {
    totalStars = 5,
    style = {},
    selectedStars = 0,
    ...restProps
  } = props

  // useState: 第一個變數是會被監聽的值? 第二個是用來修改他的function
  // const [selectedStars, setSelectedStars] = useState(3)

  return (
    <div style={{ padding: '5px', ...style }} {...restProps}>
      {[...Array(totalStars)].map((nothing, index) =>
        <Star
          key={index}
          selected={ selectedStars > index }
          // onSelect={ () => setSelectedStars(index + 1) }
        />
      )}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}

export default StarRating;