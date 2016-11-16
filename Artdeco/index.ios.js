import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Home from './Components/Home.js';
export default class Artdeco extends Component {
  render() {
    return (
      <Navigator
         initialRoute = {{name:'Home', component: Home}}
         renderScene= {(route, navigator) => {
           if (route.component){
             return React.createElement(route.component, {navigator, passProps: route.props});
           }
         }}
       />
     );
   }
 }
AppRegistry.registerComponent('Artdeco', () => Artdeco);
