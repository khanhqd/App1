import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image
  } from 'react-native';
var {height, width} = Dimensions.get('window');
import Collapsible from 'react-native-collapsible';
export default class Drawer extends Component {
  constructor(props){
    super(props);
    this.state ={
      collapsed:false
    }
  }
  _collapseChange = () => {
    this.setState({collapsed: !this.state.collapsed})
  }
  render() {
    return(
      <View style={styles.drawer}>
        <View style={{flex:0.2}}>
          <Image
            style ={styles.logoOnDrawer}
            source={{uri:'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/logo.png'}}
          />
        </View>
        <View style={{flex:0.8}}>
          <TouchableOpacity style={styles.dauMuc1} onPress={this._collapseChange}>
            <Text style={styles.textDauMuc}>TRANG ĐIỂM</Text>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} collapsedHeight={50} align="top" >
            <Text style={{color:'black'}}> Black </Text>
          </Collapsible>

          <TouchableOpacity style={styles.dauMuc}>
            <Text style={styles.textDauMuc}>SẢN PHẨM DƯỠNG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dauMuc}>
            <Text style={styles.textDauMuc}>BLOG</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dauMuc}>
            <Text style={styles.textDauMuc}>VIDEO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dauMuc}>
            <Text style={styles.textDauMuc}>BEAUTY BOX</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dauMuc}>
            <Text style={styles.textDauMuc}>TẠP CHÍ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dauMuc}>
            <Text style={styles.textDauMuc}>SẢN PHẨM ĐẶC BIỆT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dauMuc}>
            <Text style={styles.textDauMuc}>LIÊN HỆ</Text>
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
    justifyContent:'center',
    paddingLeft:20,
    paddingTop:6,
    paddingBottom:6,
    borderBottomWidth:1,
    borderColor:'grey'
  },
  textDauMuc: {
    fontSize:12,
    color:'black'
  },
  dauMuc1: {
    width:(width*2/3),
    justifyContent:'center',
    paddingLeft:20,
    paddingTop:6,
    paddingBottom:6,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'grey'
  }
}
