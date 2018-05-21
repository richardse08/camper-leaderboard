import React, { Component } from 'react';
import Header from './components/Header.js';
import Container from './components/Container.js';
import Footer from './components/Footer.js';

class App extends Component{
    
    render(){
        return(
            <div className='App'>
                <Header />
                <Container />
                <Footer />
            </div>
        );
    }
}

export default App;