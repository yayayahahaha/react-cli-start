import Color from './Color.js'

function ColorList(props) {
  const {
    colors = []
  } = props

  if (!colors.length) return (<div>There's no color!</div>)

  return (
    <>
      {colors.map((color, index) => <Color key={color.id} { ...color } />)}
    </>
  )
}

export default ColorList
