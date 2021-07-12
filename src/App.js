// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

// color-picker
import colorData from './color-picker/color-data.js'
import ColorList from './color-picker/ColorList.js'
import AddColorForm from './color-picker/AddColorForm.js'

function App() {
  const [colors, setColors] = useState(colorData)

  return (
    <div className="App">
      <AddColorForm

      />

      <ColorList
        colors={colors}
        onRemoveColor={ onRemoveColor }
        onRateChanged={ onRateChanged }
      />
    </div>
  );

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
