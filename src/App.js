import React, { Component } from 'react';
import Header from './components/Header.js';
import Container from './components/Container.js';
import Footer from './components/Footer.js';
import DataRequester from './components/DataRequester.js';

class App extends Component{
    render(){
        return(
            <div className='App'>
                <Header />
                <DataRequester />
                <Container />
                <Footer />
            </div>
        );
    }
}

export default App;