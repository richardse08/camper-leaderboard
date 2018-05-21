import React, { Component } from 'react';

class DataRequester extends Component{

    constructor(props) {
        super(props);
        props = { 
            usernameList: ['testname'], 
            pointsListRecent: 'loading...', 
            pointsListAlltime: 'loading...'
        };
    }

    render() {
        return(
            <div>
                <h1>test field{ this.props.usernameList }</h1>
            </div> 
        );
    }

}

export default DataRequester;