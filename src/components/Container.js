import React, { Component } from 'react';
import axios from 'axios';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { dataEntry: 0 };
    }


    render() {
        let dataEntry;
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        
        .then(response => {
            dataEntry = response.data[0].username;
            let usernames = response.data;
            let listItems = usernames.map((d) => <li key={d.username}>{d.username}</li>);

            this.setState({ listItems });

        });


        return (
            <div>
                Name of person: {this.state.listItems}
            </div>
        );




    } // close render

} // close Body component


export default Body;
