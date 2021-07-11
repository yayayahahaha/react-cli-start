import { FaStar } from 'react-icons/fa'

const Star = (props) => {
  const { selected = false } = props
  return (<FaStar color={selected ? 'red' : 'grey'} />)
}

export default Star
