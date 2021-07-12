// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

// color-picker
import colorData from './color-picker/color-data.js'
import ColorList from './color-picker/ColorList.js'

function App() {
  const [colors] = useState(colorData)

  return (
    <div className="App">
      <ColorList
        colors={colors}
      />
    </div>
  );
}

export default App;
