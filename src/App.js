import React, { Component } from 'react';
import './App.css';
import testComponent from './testComponent';

class App extends Component{
    render(){
        return(
            <div className='App'>
                <h1> Initial React page </h1>
                <h2> Pull in components here </h2>
                <h2> Pull in components here </h2>
                <testComponent />
            </div>    
        );
    }
}

export default App;