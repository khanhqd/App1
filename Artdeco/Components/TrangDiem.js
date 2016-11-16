import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
var {height, width} = Dimensions.get('window');
export default class TrangDiem extends Component {
  render() {
    return(
      <View>
        <View>
          <Image
            style={{width:width, height:150}}
            source={{uri: 'http://artdeco.com.vn/media/custom/slider/banner-mobile-1_1.jpg'}}
          />
        </View>
        <View>
          <View style={{height:20, width:width}}>
            <Text style={{fontSize:12, color:'black'}}> Sản phẩm cho móng
            </Text>
          </View>
          <ScrollView horizontal={true} style={{height:height/4+40, borderBottomWidth:1, borderColor:'grey'}}>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son a
                </Text>
              </View>
            </View>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son b
                </Text>
              </View>
            </View>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son c
                </Text>
              </View>
            </View>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>a
                </Text>
              </View>
            </View>
          </ScrollView>

        </View>
        <View>
          <View style={{height:20, width:width}}>
            <Text style={{fontSize:12, color:'black'}}> Sản phẩm cho môi
            </Text>
          </View>
          <ScrollView horizontal={true} style={{height:height/4+40, borderBottomWidth:1, borderColor:'grey'}}>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son a
                </Text>
              </View>
            </View>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son b
                </Text>
              </View>
            </View>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son c
                </Text>
              </View>
            </View>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son d
                </Text>
              </View>
            </View>
          </ScrollView>

        </View>
        <View>
          <View style={{height:20, width:width}}>
            <Text style={{fontSize:12, color:'black'}}> Sản phẩm cho mắt
            </Text>
          </View>
          <ScrollView horizontal={true} style={{height:height/4+40, borderBottomWidth:1, borderColor:'grey'}}>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son d
                </Text>
              </View>
            </View>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son b
                </Text>
              </View>
            </View>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son c
                </Text>
              </View>
            </View>
            <View style={{width:width/2-10, height:width/2, backgroundColor:'white', borderWidth:0.5, borderColor:'grey', justifyContent:'flex-start'}}>
              <TouchableOpacity style={{flex:0.8}}>
                <Image
                  style={{width:(width-10)/2, height:height/3-40, resizeMode:'contain'}}
                  source ={{uri: 'http://artdeco.com.vn/skin/frontend/default/artdeco.ver3.2/images/home/anh-cho-mat.jpg' }}
                />
              </TouchableOpacity>
              <View style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black', fontSize:14}}>Son d
                </Text>
              </View>
            </View>
          </ScrollView>

        </View>
        <View style={{height:50}}>
        </View>
      </View>
    );
  }
}
