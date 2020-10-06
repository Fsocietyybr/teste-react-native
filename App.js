import 'react-native-gesture-handler';
import React, {  Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

/* import screens */
import Dashboard from './src/screens/Dashboard';
import Details from './src/screens/Details';

import Art from './src/screens/drawers/art';
import Science from './src/screens/drawers/science';
import Technology from './src/screens/drawers/technology';



export default class App extends Component {
  render() {
    createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Swipe" component={Dashboard} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>

    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="@iagokrt" children={createHomeStack} />
          <Drawer.Screen name="Art!" component={Art} />
          <Drawer.Screen name="Science" component={Science} />
          <Drawer.Screen name="Technology" component={Technology} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
