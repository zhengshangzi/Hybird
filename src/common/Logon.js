import React, {Component} from 'react';
import {View, Text, Image, TextInput,TouchableOpacity, ToastAndroid,AsyncStorage, Alert,StyleSheet} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils'
const rootUrl="https://www.fastmock.site/mock/1388394dc50b2597c9f5262ad6feac28/api";

export default class Login extends Component {
  constructor(){
    super();
    this.state={
      username:"",
      pwd:"",
      pwd1:"",
      isLoading:false
    }
  }
  userhandle=(text)=>{
    this.setState({username:text})
  }
  pwdhandle=(text)=>{
    this.setState({pwd:text})
  }
  pwdhandle1=(text)=>{
    this.setState({pwd1:text})
  }
  logon=()=>{
    if(this.state.username==""||this.state.pwd==""||this.state.pwd1==""){
      Alert.alert('用户名或密码不能为空')
    }
    else{
      if(this.state.pwd!=this.state.pwd1){
        Alert.alert('两次密码输入不一致，请重新输入')
      }
      else{
        fetch(rootUrl+'/logon',{
          method:'POST',
          headers:{
            "Accept":'application/json',
            "Content-Type":'application/json'
          },
          body:JSON.stringify({
            username:this.state.username,
            pwd:this.state.pwd
          })
        })
        .then(res=>res.json())
        .then(res=>{
          if(res.data=="1"){
            Alert.alert('用户名已被注册，注册失败');    
          }
          else if(res.data=="2"){
            Alert.alert('用户名不合规范，注册失败');    
          }
          else{
            ToastAndroid.show('注册成功',100); 
            Actions.reset('login');
          }     
        });
      }
  }

  }
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>
         <Text style={{fontSize:30}}>快速注册</Text>
        <View
          style={{ alignItems: 'center',borderWidth:0,borderColor:'red',width:'95%',height:'55%',justifyContent:'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              
              marginTop:10
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
            onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              marginTop:10

            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="请输入密码" 
            secureTextEntry={true} 
            onChangeText={this.pwdhandle}/>
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              marginTop:10

            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="请再次输入密码" 
            secureTextEntry={true} 
            onChangeText={this.pwdhandle1}/>
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius:20,

                }}
                onPress={this.logon}>
                <Text>注册</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius:20,

                }}
                onPress={()=>{Actions.login()}}
                >
                <Text>返回登录</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.style_other}>
            <Text style={styles.style_view_unlogin} >其他注册方式：</Text>
            <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.style_image_other}>QQ</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.style_image_other}>微信</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.style_image_other}>微博</Text>
            </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({

  style_view_unlogin: {
      fontSize: 14,
      color: 'red',
      marginLeft: 10,
  },
  style_view_register: {
      fontSize: 12,
      color: '#63B8FF',
      marginRight: 10,
  },
  style_other:{
      bottom:30,
      //绝对定位
      position:'absolute',
      //主轴的方向
      flexDirection:'row',
      //侧轴对齐方式
      alignItems:'center'
  },
  style_image_other:{
      height:20,
      width:40,
      margin:10,
      alignItems:'center',
      justifyContent:'center'
  },
});
