import React, { Component } from 'react';
import axios from 'axios';


var testData = 'TEST DATA UNCHANGED';
var testArray = [1];
// var dataElement = <h1>Data is {testData} </h1>;
var dataElement = <h1>Data is {testData} </h1>;

function getData(id) {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(response => {
        // this.response = response.data
        // return this.response[id].username
        // console.log(this.response);
        console.log('asdfsdafsdaf   ' + response.data[id].username);
        return response.data[id].username;
        
    });
};

var someId = 1;
getData(someId)
    .then(data => {
        testArray.push(data);
        return data;

});










function getSource(input) {
 
    var source = axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")

    .then(function(response) {

        var returnedUsername = response.data[input].username;

        console.log('var returnedUsername is working : ' + returnedUsername);

        testArray.push(returnedUsername);


        return returnedUsername;
        
    });


};
        
// trigger this function so we can use it
getSource(1);


// prove we can get something from the global variables
console.log('test array is: ' + testArray);
    



class Body extends React.Component{
    render(){
        return(
            <div className='Container'>
                <div> Container: Inject leaderboard API hits here </div>
            </div>
        ),
        dataElement
    }
} // close class Body

export default Body;