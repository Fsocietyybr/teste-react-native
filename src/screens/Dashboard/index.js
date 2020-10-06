import React, { Component } from 'react';
import { Button } from 'react-native';

import { Dash, Title } from './styled-dashboard';

class Dashboard extends Component {
  render() {
    return (
      <Dash>
        <Title> Art!  </Title>
        <Title> Science & Technology  </Title>
      </Dash>
    )
  }
}

export default Dashboard
