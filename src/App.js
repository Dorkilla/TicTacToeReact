import logo from './logo.svg';
import './App.css';
import { LISTA } from '.src/components/Adat.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">TICTACTOE</header>
      <article>
      <Adat LISTA={LISTA}/>
      </article>
      <footer>Kocsi Dorottya</footer>
       </div> 
  );
}

export default App;
