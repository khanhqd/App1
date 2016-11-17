import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Drawer from './Drawer.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';
import Data from './Data.js';

export default class Home extends Component {

  moMenu() {
    this.refs['DRAWER_REF'].openDrawer();
  };

  render() {
    var navigationView = (
      <Drawer/>
  );
    return (
      <DrawerLayout
        ref={'DRAWER_REF'}
        drawerWidth={width*2/3}
        drawerPosition={DrawerLayout.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => {this.moMenu()}} style={styles.iconMenu}>
              <Icon name="bars" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Super Saler</Text>
            <View></View>
          </View>
          <View style={styles.body}>
            <Data />
          </View>
        </View>
      </DrawerLayout>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height:height/12,
    width:width,
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#336600',
    flexDirection:'row',
  },
  iconMenu:{
    paddingRight:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#336600',
    paddingLeft:15
  },
  textHeader:{
    fontSize:20,
    color:'white'
  },
  body: {
    flex:0.9,
    width:width,
    backgroundColor: 'white',

  },
});
