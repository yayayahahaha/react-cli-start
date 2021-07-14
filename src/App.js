// import logo from './logo.svg';
import './App.css';

// color-picker
import ColorList from './color-picker/ColorList.js'
import AddColorForm from './color-picker/AddColorForm.js'

import ColorProvider from './provider/ColorProvider.js'

import CatList from './components/CatList'
import Checkbox from './components/Checkbox.js'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <CatList />
      <hr />
      <Counter />
      <hr />
      <div>
        <Checkbox />
      </div>
      <hr />
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
