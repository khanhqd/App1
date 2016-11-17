import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  Button,
  Alert,
  AsyncStorage
  } from 'react-native';
var {height, width} = Dimensions.get('window');

export default class Buoi20 extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", pass: "", kq1:"", kq2:"" };
  }

  onButtonPress() {
    this.setState({
      kq1 : this.state.id,
      kq2 : this.state.pass
    })
    AsyncStorage.setItem("id", this.state.id ).done(); //JSON.stringify()
    AsyncStorage.setItem("pass", this.state.pass).done();
  };
  As
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.titleContainer}>
              <Text style={styles.textDauMuc}>
                ID:
              </Text>
          </View>
              <TextInput
                style={{height: 30, borderColor: '#d6d7da', borderWidth: 0.5, paddingLeft:30, fontSize:13}}
                onChangeText={(id) => this.setState({id})}
                value={this.state.id}
                placeholder="ID"
              />
        </View>

        <View style={styles.box}>
          <View style={styles.titleContainer}>
              <Text style={styles.textDauMuc}>
                Pass:
              </Text>
          </View>
              <TextInput
                style={{height: 30, borderColor: '#d6d7da', borderWidth: 0.5, paddingLeft:30, fontSize:13}}
                onChangeText={(pass) => this.setState({pass})}
                value={this.state.pass}
                placeholder="Password"
              />
        </View>
        <View style={{flexDirection:'column', justifyContent:'space-around', backgroundColor:'#ffffff'}}>
          <Button
            onPress={() => this.onButtonPress()}
            title="Login"
            color="green"
            />
        </View>

        <View>
          <Text style={styles.text}>
            <Text>{this.state.kq1}</Text>
          </Text>
          <Text style={styles.text}>
            <Text>{this.state.kq2}</Text>
          </Text>
        </View>
      </View>
    );
  }
  componentDidMount() {
    AsyncStorage.getItem("id")
    	.then( (value) =>
            {
        			if(value != null) {
                this.setState({
                  kq1: value
                })
              }
            }
      )

      AsyncStorage.getItem("pass")
      	.then( (value) =>
              {
          			if(value != null) {
                  this.setState({
                    kq2: value
                  })
                }
              }
        )
  }
}

const styles ={
  container:{
    backgroundColor: 'green',
    flex: 1,
    justifyContent:'center',
    padding:20
  },
  box:{
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 5,
    marginVertical: 1,
    overflow: 'hidden',

  },
  titleContainer:{
    borderBottomWidth: 1,
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
}
