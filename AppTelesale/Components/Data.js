import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
  Scrollview,
  ListView
} from 'react-native';
var URL = "http://192.168.1.41/API/demoapi.php";
var data = [];
var i=0;
var {height, width} = Dimensions.get('window');
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
export default class Data extends Component {
  constructor(props){
    super(props);
    this.state = {
      makh:'',
      hoten: '',
      ngaysinh:'',
      sdt:'',
      diachi:'',
      nhanvien:'',
      noidung:'',
      salerName: ""
    }
  }
  fetchData(){
      fetch(URL, {method:'POST' , body: null})
        .then((response) => response.json())
        .then((responseData) =>{
          data = responseData
            this.setState({
              makh:data[0].makh,
              hoten:data[0].hoten,
              ngaysinh:data[0].ngaysinh,
              sdt:data[0].sdt,
              diachi:data[0].diachi,
              nhanvien:data[0].nhanvien,
              noidung:data[0].noidung
            })
        })
      .done()
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.titleContainer}>
            <Text style={styles.textDauMuc}>
              Mã:
            </Text>
          </View>
          <Text style={styles.text}>
            {this.state.makh}
          </Text>
        </View>
        <View style={styles.box}>
          <View style={styles.titleContainer}>
            <Text style={styles.textDauMuc}>
              Họ và tên:
            </Text>
          </View>
          <Text style={styles.text}>
            {this.state.hoten}
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
            <Text style={styles.textDauMuc}>
              Ngày sinh:
            </Text>
          </View>
          <Text style={styles.text}>
              {this.state.ngaysinh}
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
            <Text style={styles.textDauMuc}>
              Địa chỉ:
            </Text>
          </View>
          <Text style={styles.text}>
              {this.state.diachi}
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
            <Text style={styles.textDauMuc}>
              Số điện thoại:
            </Text>
          </View>
          <Text style={styles.text}>
            {this.state.sdt}
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
              <Text style={styles.textDauMuc}>
                Nhân viên phụ trách
              </Text>
          </View>
              <TextInput
                style={{height: 30, borderColor: '#d6d7da', borderWidth: 0.5, paddingLeft:30, fontSize:13}}
                onChangeText={(salerName) => this.setState({salerName})}
                value={this.state.salerName}
                placeholder="Oanh/Dinh/Hạnh/Môi/Linh"
              />
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
              <Text style={styles.textDauMuc}>
                Trạng thái:
              </Text>
          </View>
              <TextInput
                style={{height: 30, borderColor: '#d6d7da', borderWidth: 0.5, paddingLeft:30, fontSize:13}}
                onChangeText={(salerName) => this.setState({salerName})}
                value={this.state.salerName}
                placeholder="Đã hẹn/Đã demo/K thành công"
              />
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
              <Text style={styles.textDauMuc}>
                Kết quả liên hệ:
              </Text>
          </View>
              <TextInput
                style={{height: 70, borderColor: '#d6d7da', borderWidth: 0.5, paddingLeft:30, fontSize:13}}
                onChangeText={(salerName) => this.setState({salerName})}
                value={this.state.salerName}
                placeholder="Đã hẹn/Đã demo/K thành công"
              />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-around', backgroundColor:'#ffffff'}}>
          <Button
            onPress={onButtonPress}
            title="Quay lại"
            color="green"
            />
          <Button
            onPress={fetchData()}
            title="Tiếp tục"
            color="green"
          />
        </View>
      </View>
    );
  }
  componentDidMount(){
      this.fetchData()
  }
}
const styles = StyleSheet.create({

  container:{
    backgroundColor: '#e9eaed',
    flex: 1,
    justifyContent:'space-around'
  },
  box:{
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 5,
    marginVertical: 1,
    overflow: 'hidden',

  },
  titleContainer:{
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  picker: {
    width: 100,
    height:50
  },
  textDauMuc:{
    color:'black',
    paddingLeft:20,
    fontSize:13,
    fontWeight:'bold'
  },
  text:{
    fontSize:13,
    padding:10,
    paddingLeft:30
  },
});
