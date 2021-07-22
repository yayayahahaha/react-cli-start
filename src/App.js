// import logo from './logo.svg';
import './App.css';

// color-picker
import ColorList from './color-picker/ColorList.js'
import AddColorForm from './color-picker/AddColorForm.js'

import ColorProvider from './provider/ColorProvider.js'

import ReduceCounter from './components/ReduceCounter'
import CatList from './components/CatList'
import Checkbox from './components/Checkbox.js'
import Counter from './components/Counter'

import UserList from './user-list/UserList'
import GithubUser from './components/GithubUser'

function App() {
  // const demo = 'user-list'
  const demo = 'github-user'

  switch (demo) {
    case 'user-list':
      return <>
        <UserList />
      </>
    case 'github-user':
      return <>
        <GithubUser />
      </>
    default:
      return (
        <>
          <ReduceCounter />
          <hr />
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
}

export default App;
