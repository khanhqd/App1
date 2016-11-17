import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Dimensions
} from 'react-native';
import Home from './Components/Home.js';
var {height, width} = Dimensions.get('window');
export default class AppTelesale extends Component {
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
AppRegistry.registerComponent('AppTelesale', () => AppTelesale);
