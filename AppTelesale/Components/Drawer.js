import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image
  } from 'react-native';
var {height, width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Drawer extends Component {
  render() {
    return(
      <View style={styles.drawer}>
        <View style={{flex:0.8, paddingTop:100}}>
          <TouchableOpacity style={styles.dauMuc1}>
            <Icon name="address-book" size={18} color="black" />
            <Text style={styles.textDauMuc}>DATABASE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dauMuc}>
            <Icon name="history" size={18} color="black" />
            <Text style={styles.textDauMuc}>LỊCH SỬ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dauMuc}>
            <Icon name="money" size={18} color="black" />
            <Text style={styles.textDauMuc}>KHÁCH CỦA TÔI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dauMuc}>
            <Icon name="book" size={18} color="black" />
            <Text style={styles.textDauMuc}>ÔN TẬP KIẾN THỨC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dauMuc}>
            <Icon name="bar-chart" size={18} color="black" />
            <Text style={styles.textDauMuc}>BÁO CÁO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles ={
  drawer:{
    flex: 1,
    backgroundColor: 'white'
  },
  logoOnDrawer:{
    resizeMode:'center',
    width:width*2/3,
    height:height/4
  },
  dauMuc: {
    width:(width*2/3),
    paddingLeft:20,
    paddingTop:6,
    paddingBottom:6,
    borderBottomWidth:1,
    borderColor:'grey',
    flexDirection:'row'
  },
  textDauMuc: {
    fontSize:12,
    color:'black',
    paddingLeft:20,
    fontWeight:'bold'
  },
  dauMuc1: {
    width:(width*2/3),
    paddingLeft:20,
    paddingTop:6,
    paddingBottom:6,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'grey',
    flexDirection:'row'
  }
}
