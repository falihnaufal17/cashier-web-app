import React, { Component } from 'react';
import Routing from './routers/route';
import Axios from 'axios';

export class App extends Component {
  render() {
    Axios.defaults.headers.common['authorization'] = 'x-cashier-app'
    return (
      <Routing />
    );
  }
}

export default App;
