// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

// color-picker
import colorData from './color-picker/color-data.js'
import ColorList from './color-picker/ColorList.js'
import AddColorForm from './color-picker/AddColorForm.js'

import { v4 } from 'uuid'

function App() {
  const [colors, setColors] = useState(colorData)

  return (
    <div className="App">
      <AddColorForm
        onNewColor={ onNewColor }
      />

      <ColorList
        colors={colors}
        onRemoveColor={ onRemoveColor }
        onRateChanged={ onRateChanged }
      />
    </div>
  );

  function onNewColor({ title, color }) {
    const id = v4()
    const rating = 0

    const newColors = [
      ...colors,
      { id, title, color, rating}
    ]
    setColors(newColors)
  }

  function onRateChanged(id, rating) {
    const newColors = colors.map(color => color.id === id ? { ...color, rating } : color)
    setColors(newColors)
  }

  function onRemoveColor(removedId) {
    const newColors = colors.filter(({id}) => id !== removedId)
    setColors(newColors)
  }
}

export default App;
