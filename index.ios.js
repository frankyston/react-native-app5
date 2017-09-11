import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Routes from './config/routes';

export default class app5 extends Component {
  render() {
    return (
      <Routes />
    );
  }
}


AppRegistry.registerComponent('app5', () => app5);
