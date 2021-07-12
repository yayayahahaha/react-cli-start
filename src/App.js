// import logo from './logo.svg';
import './App.css';
import StarRating from './rating-project/StarRating.js'

function App() {
  return (
    <div className="App">
      <StarRating
        totalStars={6}
        style={ { backgroundColor: 'lightblue' } }
        onDoubleClick={ () => console.log('onDoubleClick!', this) }
      />
    </div>
  );
}

export default App;
