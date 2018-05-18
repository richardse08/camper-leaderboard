import React, { Component } from 'react';
import axios from 'axios';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            usernameList: 'loading...', 
            pointsListRecent: 'loading...', 
            pointsListAlltime: 'loading...'
        };
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

    testFunction() {
        var self = this;
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(response => {
            let usernames = response.data;
            let usernameList2 = usernames.map((d) => <li key={d.username}>{d.username}</li>);
            let pointsListRecent2 = usernames.map((d) => <li key={d.recent}>{d.recent}</li>);
            let pointsListAlltime2 = usernames.map((d) => <li key={d.alltime}>{d.alltime}</li>);
            self.setState({ usernameList: usernameList2, pointsListRecent: pointsListRecent2, pointsListAlltime: pointsListAlltime2 });
        });
    }

    getRequest(url) {
        axios.get(url)
        .then(response => {
            let usernames = response.data;
            let usernameList = usernames.map((d) => <li key={d.username}>{d.username}</li>);
            let pointsListRecent = usernames.map((d) => <li key={d.recent}>{d.recent}</li>);
            let pointsListAlltime = usernames.map((d) => <li key={d.alltime}>{d.alltime}</li>);
            this.setState({ usernameList: usernameList, pointsListRecent: pointsListRecent, pointsListAlltime: pointsListAlltime });
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

                    <button onClick={ this.testFunction } >Sort by Recent Points</button>

                    Camper Points: {this.state.pointsListAlltime}
                </div>
            </div>
        );

    } // close render

} // close Body component

export default Body;
