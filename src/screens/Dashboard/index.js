import React, { Component } from 'react';

import { Dash, Title, Btn } from './styled-dashboard';

class Dashboard extends Component {
  render() {
    return (
      <Dash>
        <Title>Art! Science! Techn0logy!</Title>
        <Btn
          title='Go to Details'
          color='#008891'
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </Dash>
    )
  }
}

export default Dashboard
