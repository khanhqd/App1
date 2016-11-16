import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
var {height, width} = Dimensions.get('window');
var Carousel = require('react-native-carousel');
import Swiper from 'react-native-swiper';

import GridView from "react-native-easy-grid-view";
var data = [
  {anh: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mong.jpg', tensanpham: 'Trang điểm cho móng', gia:'$100'},
  {anh: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-moi.jpg', tensanpham: 'Trang điểm cho môi', gia:'$100'},
  {anh: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg', tensanpham: 'Trang điểm cho mắt', gia:'$100'},
  {anh: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg', tensanpham: 'Trang điểm cho móng', gia:'$100'},
  {anh: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg', tensanpham: 'Trang điểm cho móng', gia:'$100'},
  {anh: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg', tensanpham: 'Trang điểm cho móng', gia:'$100'},
  {anh: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg', tensanpham: 'Trang điểm cho móng', gia:'$100'},
  {anh: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg', tensanpham: 'Trang điểm cho móng', gia:'$100'},
]
export default class TrangChu extends Component {
  constructor(props) {
       super(props);
       var ds = new GridView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.state = {
           dataSource: ds.cloneWithCells(data, 2)
         }
       }
 _renderCell(cell) {
   return(
     <View style={styles.cell}>
       <TouchableOpacity style={{flex:0.8, backgroundColor:'white'}}>
         <View style={{height:10}}></View>
         <Image
           style={styles.cellImg}
           source ={{uri: "http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg" }}
         />
       </TouchableOpacity>
       <View style={styles.title}>
         <Text style={{color:'black', fontSize:14}}>{cell.tensanpham}
         </Text>
       </View>
     </View>
     )
   }
  render() {
    return(
      <View>
        <View>
          <Swiper style={styles.wrapper} showsButtons={false}>
              <View style={styles.slide1}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide2}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
              <View style={styles.slide3}>
                <Text style={styles.text}>And simple</Text>
              </View>
          </Swiper>
          <Image
            style={{width:width, height:150}}
            source={{uri: 'http://artdeco.com.vn/media/custom/slider/banner-mobile-1_1.jpg'}}
          />
        </View>
        <View>
          <GridView dataSource={this.state.dataSource}
                      spacing={5}
                      style={{padding:5, backgroundColor:'white'}}
                      renderCell={this._renderCell.bind(this)}

            />
        </View>
        <View style={{height:50, backgroundColor:'white'}}>
        </View>
      </View>

    );
  }
}
const styles = {
  cell:{
    width:width/2-15,
    height:width/2,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'grey',
    justifyContent:'flex-start',
    borderRadius:5
  },
  cellImg:{
    width:width/2-20,
    height:width/2-20,
    resizeMode:'contain',
    borderRadius:5
  },
  title:{
    flex:0.1,
    justifyContent:'center',
    alignItems:'center'
  },
  container: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  wrapper: {
    height:height/2
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    height:height/2
  },
  slide2: {
    height:height/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slide3: {
    height:height/2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
}
