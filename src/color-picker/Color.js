import StarRating from '../rating-project/StarRating.js'

function Color(props) {
  const {
    title = '',
    color = 'rbg(255, 0, 99)',
    rating = 0
  } = props

  return (
    <section>
      <h1>{title}</h1>
      <div style={ { height: '50px', backgroundColor: color } }></div>
      <StarRating selectedStars={rating} />
    </section>
  )
}

export default Color
