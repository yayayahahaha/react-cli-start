import { FaStar } from 'react-icons/fa'

const Star = (props) => {
  const {
    selected = false,
    onSelect = Function.prototype
  } = props

  console.count('here')

  return (<FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />)
}

export default Star
