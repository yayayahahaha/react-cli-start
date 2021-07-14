import { memo } from 'react'

function Cat(props) {
  const { name } = props
  console.log(`rendering ${name}`)
  return (
    <p>my name is {name}</p>
  )
}

// export default memo(Cat)
export default Cat
