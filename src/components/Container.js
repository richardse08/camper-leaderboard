import React, { Component } from 'react';




class Body extends React.Component {

    // what is a constuctor? props are like variables right??
    constructor(props) {
        // pass props to the parent constuctor *why do this if constructor(props) just passes things to the CHILD?
        super(props);
        // initialize state to a value of 0
        this.state = { seconds: 0 };
    }

    // this is simply a familiar function
    tick() {
        // set this state to a function that finds out what the previous state was
        // once we know the previous state, just add 1 to it and make that SECONDS
        // when this is called, grab state (like 3), and add 1 to it, thats ALL it does
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }

    // this only runs once component mounts
    // perfect place to do my AJAX request to get the data I need
    // should you not setState here instead?? sounds like a document.ready thing
    componentDidMount() {
        // this is different, but i recognize setInterval just looks like its ES6 style
        // simply fires tick every second, in turn tick will ++ the previous state
        // find interval, set it to this tick?? then wait a 1000 ms and exit???
        this.interval = setInterval(() => this.tick(), 1000);
    }

    // what are some use cases for this in my application? if any? is it even needed here?
    componentWillUnmount() {
        // clear interval out, only thing I can think of for this is if we refresh the page?
        clearInterval(this.interval);
    }

    // effectively the html with the vars/state plugged in
    render() {
        return (
            // Seconds: is a string followed by the seconds of the state
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }

}

export default Body;
// ReactDOM.render(<Timer />, mountNode);