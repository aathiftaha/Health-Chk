// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './Components/Navbar';
import MainSection from './Components/MainSection';
import BodySection from './Components/BodySection';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      <Navbar></Navbar>
      <MainSection></MainSection>
      <BodySection></BodySection>
    </div>
  );
}

export default App;
