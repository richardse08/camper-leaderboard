import React, { Component } from 'react';
import axios from 'axios';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { dataEntry: 0 };
    }



    componentDidMount() {

        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(response => {
            const dataEntry = response.data[0].username;
            this.setState({ dataEntry });

            console.log(response.data);

            for (var i = 0; i<response.data.length; i++) {
                console.log(response.data[i].username);
            }
        });

    }


    render() {
        return (
            <div>
                Name of person: {this.state.dataEntry}
            </div>
        );
    }

}


export default Body;
