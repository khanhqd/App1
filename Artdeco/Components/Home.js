import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  DrawerLayoutAndroid,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Drawer from './Drawer.js';
import TrangChu from './TrangChu.js';
import TrangDiem from './TrangDiem.js';
import LienHe from './LienHe.js';
import DrawerLayout from 'react-native-drawer-layout';
var {height, width} = Dimensions.get('window');

export default class Home extends Component {
  moMenu() {
    this.refs['DRAWER_REF'].openDrawer();
  }
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
        <View style={{height:height/14*13}}>
          <ScrollableTabView
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
          >
              <ScrollView tabLabel="Trang chủ" style={styles.tabView}>
                <View style={styles.card}>
                  <TrangChu/>
                </View>
              </ScrollView>
              <ScrollView tabLabel="Trang điểm" style={styles.tabView}>
                <TrangDiem/>
              </ScrollView>
              <ScrollView tabLabel="Sản phẩm dưỡng" style={styles.tabView}>
                <TrangDiem/>
              </ScrollView>
              <ScrollView tabLabel="Liên hệ" style={styles.tabView}>
                <LienHe/>
              </ScrollView>
          </ScrollableTabView>
        </View>
     </DrawerLayout>

    );
  }
}

const styles = StyleSheet.create ({
  header: {
    height:height/14,
    backgroundColor: "black",
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  textHeader: {
    color:'white',
    fontSize:20
  },
  card: {
    backgroundColor: 'black'
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  textTab: {
    color:'black',
    padding:5
  }
});
