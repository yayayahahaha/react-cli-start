import Color from './Color.js'

function ColorList(props) {
  const {
    colors = [],
    onRemoveColor = Function.prototype,
    onRateChanged = Function.prototype
  } = props

  if (!colors.length) return (<div>There's no color!</div>)

  return (
    <>
      {colors.map((color, index) =>
        <Color
          key={color.id}
          { ...color }
          onRemove={ onRemoveColor }
          onRateChanged={ onRateChanged }
        />)
      }
    </>
  )
}

export default ColorList
