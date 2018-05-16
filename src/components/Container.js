import React, { Component } from 'react';
import axios from 'axios';
var testData = 'asdf';
var dataElement = <h1>Data is {testData} </h1>;




    

function getSource() {
    var source = axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
    .then(function(response) {
        console.log(response.data[0].username);
        // need to get this into another area
    })


    return source;
};
        
testData = getSource();
    



class Body extends Component{
    render(){
        return(
            <div className='Container'>
                <div> Container: Inject leaderboard API hits here </div>
            </div>
        ),
        dataElement
    }
}

export default Body;