import React, { Component } from 'react';
import axios from 'axios';

class Body extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            usernameList: [ ], 
            pointsListRecent: 'loading...', 
            pointsListAlltime: 'loading...'
        };
    }

    componentDidMount() {
        this.getRecentData();
    }

    getAlltimeData() {
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(response => {
            this.setState({usernameList: [], pointsListRecent: [], pointsListAlltime: []});
            let usernames = response.data;
            let usernameList = usernames.map((usernames, index) => <li key={index}>{usernames.username}</li>);
            let pointsListRecent = usernames.map((usernames, index) => <li key={index}>{usernames.recent}</li>);
            let pointsListAlltime = usernames.map((usernames, index) => <li key={index}>{usernames.alltime}</li>);
            this.setState({ usernameList: usernameList, pointsListRecent: pointsListRecent, pointsListAlltime: pointsListAlltime });
        });
    }

    getRecentData() {
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(response => {
            this.setState({usernameList: [], pointsListRecent: [], pointsListAlltime: []});
            let usernames = response.data;
            let usernameList = usernames.map((usernames, index) => <li key={index}>{usernames.username}</li>);
            let pointsListRecent = usernames.map((usernames, index) => <li key={index}>{usernames.recent}</li>);
            let pointsListAlltime = usernames.map((usernames, index) => <li key={index}>{usernames.alltime}</li>);
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
                <button onClick={ () => this.getRecentData() } >Sort by Recent Points</button>
                    Camper Points: {this.state.pointsListRecent}
                </div>
                <div className="column">
                    <button onClick={ () => this.getAlltimeData() } >Sort by Alltime Points</button>
                    Camper Points: {this.state.pointsListAlltime}
                </div>
            </div>
        );

    } // close render

} // close Body component

export default Body;
