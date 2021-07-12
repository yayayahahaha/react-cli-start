import StarRating from '../rating-project/StarRating.js'
import { FaTrash } from 'react-icons/fa'

function Color(props) {
  const {
    id = '',
    title = '',
    color = 'rbg(255, 0, 99)',
    rating = 0,
    onRemove = Function.prototype
  } = props

  return (
    <section>
      <h1>{title}</h1>
      <p>section id: <b>{id}</b></p>
      <p>current rate: {rating}</p>
      <button onClick={ () => onRemove(id) }>
        <FaTrash />
      </button>
      <div style={ { height: '50px', backgroundColor: color } }></div>

      <StarRating
        selectedStars={rating}
        id={id}
      />
    </section>
  )
}

export default Color
