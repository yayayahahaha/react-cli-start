import Color from './Color.js'
import { useColors } from '../provider/ColorProvider.js'

function ColorList(props) {
  const {
    colors,
    removeColor: onRemoveColor = Function.prototype
  } = useColors()

  if (!colors.length) return (<div>There's no color!</div>)
  return (
    <>
      {colors.map((color, index) =>
        <Color
          key={color.id}
          { ...color }
          onRemove={ onRemoveColor }
        />)
      }
    </>
  )
}

export default ColorList
