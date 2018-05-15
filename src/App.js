import React, { Component } from 'react';
// import './App.css';


import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component{
    render(){
        return(
            <div className='App'>
                <h1> Initial React page </h1>
                <Header />
                <Footer />
            </div>    
        );
    }
}

export default App;