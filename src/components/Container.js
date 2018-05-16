import React, { Component } from 'react';
import axios from 'axios';



class Body extends React.Component {

    constructor(props) {
        super(props);

        this.state = { data: 0 };
    }

    tick() {

        this.setState(prevState => ({
            data: prevState.data = 300
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
        this.interval = this.tick();

        var id = 5;

        function getData(id) {
            return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(response => {

                console.log('asdfsdafsdaf   ' + response.data[id].username);
                return response.data[id].username;
                
            });
        };
    }

    componentWillUnmount() {
        clearInterval(this.interval);
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
