import { FaStar } from 'react-icons/fa'

const Star = (props) => {
  const {
    selected = false,
    onSelect = Function.prototype
  } = props

  return (
    <>
      <FaStar
        color={selected ? 'red' : 'grey'}
        onClick={onSelect}
      />
    </>
  )
}

export default Star
