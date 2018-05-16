import React, { Component } from 'react';
// import './dist/css/project.css';



import Header from './components/Header.js';
import Footer from './components/Footer.js';



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