// import logo from './logo.svg';
import './App.css';

// color-picker
import ColorList from './color-picker/ColorList.js'
import AddColorForm from './color-picker/AddColorForm.js'

import ColorProvider from './provider/ColorProvider.js'

function App() {
  return (
    <ColorProvider>
      <div className="App">
        <AddColorForm />
        <ColorList />
      </div>
    </ColorProvider>
  )
}

export default App;
