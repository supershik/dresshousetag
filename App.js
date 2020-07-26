import React, { Component } from 'react';
import SignInScreen from "./src/screens/SignInScreen"
import HomeScreen  from "./src/screens/HomeScreen"

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

const App = createStackNavigator({
    Signin: { screen: SignInScreen }, 
    Home: { screen: HomeScreen }, 
  },
  {
    initialRouteName: 'Signin',
  }
);

export default createAppContainer(App);