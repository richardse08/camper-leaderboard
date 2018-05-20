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
        this.getRequest();
        // this.getRequest('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
        // this.getRequest('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
    }

    testFunction() {
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(response => {
            this.setState({usernameList: [], pointsListRecent: [], pointsListAlltime: []});
            let usernames = response.data;

            let usernameList = usernames.map((d) => <li key={d.username}>{d.username}</li>);
            let pointsListRecent = usernames.map((d) => <li key={d.recent}>{d.recent}</li>);
            let pointsListAlltime = usernames.map((d) => <li key={d.alltime}>{d.alltime}</li>);

            // let usernameList = [];
            // let pointsListRecent = [];
            // let pointsListAlltime = [];

            // for(var i = 0; i < usernames.length; i++){
            //     usernameList.push(usernames[i].username);
            //     pointsListRecent.push(usernames[i].recent);
            //     pointsListAlltime.push(usernames[i].alltime);
            // }

            // console.log(usernameList);
            // console.log(pointsListRecent);
            // console.log(pointsListAlltime);
            

            this.setState({ usernameList: usernameList, pointsListRecent: pointsListRecent, pointsListAlltime: pointsListAlltime });
        });
    }

    getRequest() {
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(response => {
            this.setState({usernameList: [], pointsListRecent: [], pointsListAlltime: []});
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
                <button onClick={ () => this.getRequest() } >Sort by Recent Points</button>
                    Camper Points: {this.state.pointsListRecent}
                </div>
                <div className="column">
                    <button onClick={ () => this.testFunction() } >Sort by Alltime Points</button>
                    Camper Points: {this.state.pointsListAlltime}
                </div>
            </div>
        );

    } // close render

} // close Body component

export default Body;
