import React, { Component } from 'react';
import axios from 'axios';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { usernameList: 0, pointsListRecent: 0, pointsListAlltime: 0 };
    }

    componentDidMount() {
        this.recentUrlController()
        // this.alltimeUrlController()
    }

    recentUrlController() {
        this.getRequest('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    }

    alltimeUrlController() {
        this.getRequest('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    }

    getRequest(url) {
        axios.get(url)
        .then(response => {
            let usernames = response.data;
            let usernameList = usernames.map((d) => <li key={d.username}>{d.username}</li>);
            let pointsListRecent = usernames.map((d) => <li key={d.recent}>{d.recent}</li>);
            let pointsListAlltime = usernames.map((d) => <li key={d.alltime}>{d.alltime}</li>);
            this.setState({ usernameList, pointsListRecent, pointsListAlltime });
        });
    }

    render() {
        return (
            <div>
                <div className="column">
                    Camper Name: {this.state.usernameList}            
                </div>
                <div className="column">
                    Camper Points: {this.state.pointsListRecent}
                </div>
                <div className="column">
                    {/* <button onClick={ this.alltimeUrlController() } >Sort by Recent Points</button> */}
                    Camper Points: {this.state.pointsListAlltime}
                </div>
            </div>
        );

    } // close render

} // close Body component

export default Body;
