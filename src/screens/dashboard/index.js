import React, { Component } from 'react';
import { Button } from 'react-native';

import { Main, Title, Content, News, LinkButton } from '../../styles/global';

/* function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Title>Article Screen</Title>
    </View>
  );
} */

class Dashboard extends Component {
  render() {
    return (
      <Main>
        <Title> Dashboard </Title>
        <Button
          title="Go to random news about tech & science"
          onPress={() => {}}
         />
      </Main>
    )
  }
}

export default Dashboard
