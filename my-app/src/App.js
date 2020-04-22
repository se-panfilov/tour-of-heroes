import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Menu} from './Menu'
import {Board} from "./Square";


function App() {
    const name = 'Sergei'

    return (
        <div className="App">
            <Menu name={name}/>
            <Board/>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    My name is {name} <br/>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
