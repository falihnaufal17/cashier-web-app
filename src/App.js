import React, { Component } from 'react';
import Routing from './routers/route';
import Axios from 'axios';

export class App extends Component {
  render() {
    return (
      <Routing />
    );
  }
}

export default App;
