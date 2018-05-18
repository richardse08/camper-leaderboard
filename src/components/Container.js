import React, { Component } from 'react';
import axios from 'axios';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { usernameList: 0, pointsListRecent: 0 };
    }

    componentDidMount() {
        let dataEntry;
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        
        .then(response => {
            let usernames = response.data;
            let usernameList = usernames.map((d) => <li key={d.username}>{d.username}</li>);
            let pointsListRecent = usernames.map((d) => <li key={d.recent}>{d.recent}</li>);


            this.setState({ usernameList, pointsListRecent });

        });
    }

    render() {



        return (
            <div>
                <div className="left">
                    Camper Name: {this.state.usernameList}            
                </div>
    
                <div className="right">
                    Camper Points: {this.state.pointsListRecent}
                </div>
                
            </div>
        );




    } // close render

} // close Body component


export default Body;
