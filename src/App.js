import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';

function App() {

  let [name, setName] = useState("hancoding");

  return (
    <div className="App">
      <header className='App-header'>
        <div> {name} </div>


      </header>
    </div>
  );
}

export default App;
