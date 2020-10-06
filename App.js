import 'react-native-gesture-handler';
import React, { useEffect, useState, Component } from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'

//import api from './src/services/api'

import Dashboard from './src/screens/dashboard';

// const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
     <Dashboard />
    );
  }
}
