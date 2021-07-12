import Star from './Star.js'
import { useColors } from '../provider/ColorProvider'

function StarRating(props) {
  const {
    id = '',
    totalStars = 5,
    style = {},
    selectedStars = 0,
    ...restProps
  } = props

  const { rateColor: onRateChanged } = useColors()

  return (
    <div style={{ padding: '5px', ...style }} {...restProps}>
      {[...Array(totalStars)].map((nothing, index) =>
        <Star
          key={index}
          selected={ selectedStars > index }
          onSelect={ () => onRateChanged(id, index + 1) }
        />
      )}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}

export default StarRating;
