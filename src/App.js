// import logo from './logo.svg';
import './App.css';

// color-picker
import ColorList from './color-picker/ColorList.js'
import AddColorForm from './color-picker/AddColorForm.js'

import ColorProvider from './provider/ColorProvider.js'

import Checkbox from './components/Checkbox.js'
function App() {
  return (
    <>
      <div>
        <Checkbox />
      </div>

      <ColorProvider>
        <div className="App">
          <AddColorForm />
          <ColorList />
        </div>
      </ColorProvider>
    </>
  )
}

export default App;
