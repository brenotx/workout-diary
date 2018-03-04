import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return <MuiThemeProvider>{this.props.children}</MuiThemeProvider>;
    }
}

export default App;
