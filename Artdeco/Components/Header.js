import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image
  } from 'react-native';
var {height, width} = Dimensions.get('window');

export default class Drawer extends Component {
  render() {
    return(
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {this.moMenu()}} style={{paddingRight:10, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
          <Icon name="bars" size={20} color="white" />
        </TouchableOpacity>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize:7, color:'white'}}> MY BEAUTY MY WAY </Text>
          <Text style={styles.textHeader}>ARTDECO</Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center',paddingRight:10}}>
          <Icon name="shopping-cart" size={20} color="white" />
        </View>
      </View>
    );
  }
}
