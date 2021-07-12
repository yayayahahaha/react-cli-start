import { createContext, useState, useContext } from 'react'
import colorData from '../color-picker/color-data.js'
import { v4 } from 'uuid'

const ColorContext = createContext()
function ColorProvider(props) {
  const { children } = props

  const [colors, setColors] = useState(colorData)
  const functions = { addColor, rateColor, removeColor }

  return (
    <ColorContext.Provider value={ { colors, ...functions, flyc: 'katsurayu' } }>
      { children }
    </ColorContext.Provider>
  )

  function addColor({title, color}) {
    setColors([...colors, {
      id: v4(),
      title,
      color,
      rating: 0
    }])
  }
  function rateColor(id, rating) {
    setColors(colors.map((color) => color.id === id ? { ...color, rating } : color))
  }
  function removeColor(removedId) {
    setColors(colors.filter(({id}) => id !== removedId))
  }
}

export const useColors = () => useContext(ColorContext)
export default ColorProvider
