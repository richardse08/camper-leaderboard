import React, { Component } from 'react';
import axios from 'axios';
var test = 400;

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: 0 };
    }

    tick() {
        // this.setState(prevState => ({
        //     data: prevState.data = 300
        // }));

        this.setState(prevState => ({
            // return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            // .then(response => {
            //     return response.data[id].username;
            // })
            data: prevState.data = test
        }));

    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div>
                data: {this.state.data}
            </div>
        );
    }

}


export default Body;
