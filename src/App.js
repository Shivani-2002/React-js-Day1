import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="App">

      <div id="namediv"><Header/></div>

      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div id="footer"><Footer/></div>
        
      </header>

      

    </div>
  );
}

export default App;
