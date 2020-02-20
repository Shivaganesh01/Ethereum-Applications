import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { greeterContract } from './EthereumProvider';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            greeting: "Hello"
        }
    }

    componentWillMount() {
        var data = greeterContract.greet();
        this.setState({
            greeting: String(data)
        })
    }

    render() {
        return ( <
            div className = "App" >
            <
            div className = "App-header" >
            <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <
            h2 > Welcome to React < /h2> < /
            div > <
            p className = "App-intro" >
            <
            h2 > "{this.state.greeting}" < /h2> < /
            p > <
            /div>
        );
    }
}

export default App;