import logo from './logo.svg';
import './App.css';
import Header  from './component/Header/Header';

import Player from './Player/Player'

function App() {


  

  return (
    <div className="App">
      <header className="App-header">
      <Header></Header>
      <Player></Player>
      </header>
    </div>
  );
}

export default App;
