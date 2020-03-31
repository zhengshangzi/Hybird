import React, {Component} from 'react';
import {View, Text,StatusBar, Image, TextInput,TouchableOpacity, AsyncStorage, Alert,StyleSheet,ActivityIndicator,ScrollView} from 'react-native';
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
      isLoading:false
    }
  }
  userhandle=(text)=>{
    this.setState({username:text})
  }
  pwdhandle=(text)=>{
    this.setState({pwd:text})
  }
  login=()=>{
    if(this.state.username==""||this.state.pwd==""){
      Alert.alert('请输入用户名或密码')
    }
    else{
      this.setState({isLoading:true});
      fetch(rootUrl+'/login',{
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
        if(res.data=='0'){
          this.setState({isLoading:false});
          Alert.alert('密码错误')
        }
        else{
          AsyncStorage.setItem('user',JSON.stringify(res.data))
          .then(()=>{ 
            this.setState({isLoading:false});
            AsyncStorage.getItem('user')
            .then((res)=>{
                let user=JSON.parse(res);
                console.log("user"+user.username); 
            })
            Actions.homePage();
          }) 
        }   
      })
    }
  }
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>
        <StatusBar backgroundColor='red'/>
        <View
          style={{ alignItems: 'center',borderWidth:0,borderColor:'red',width:'95%',height:'60%',justifyContent:'center',}}>
          <Text style={{fontSize:30,marginBottom:40}}> 欢迎登录</Text>
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
            <TextInput placeholder="密码" 
            secureTextEntry={true} 
            onChangeText={this.pwdhandle}/>
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 40,
                    alignItems: 'center',
                    borderRadius:20,
                    justifyContent: 'center'
                }}
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 40,
                    alignItems: 'center',
                    borderRadius:20,
                    justifyContent: 'center'
                }}
                onPress={()=>{Actions.logon()}}
                >
                <Text>无账号？去注册</Text>
            </TouchableOpacity>
            <View style={styles.style_setting}>
                <TouchableOpacity activeOpacity={0.5}>
                <Text style={styles.style_view_unlogin} >无法登录,忘记密码？</Text>
                </TouchableOpacity>
            </View>

            
        </View>
        {
          this.state.isLoading?
          <View style={{width:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row',height:'10%'}}>
            <Text style={{fontSize:20}}>正在登录中</Text>
            <ActivityIndicator color="red" size='large'/>
            </View>
            :null
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  style_setting:{
    //设置主轴方向
    flexDirection:'row',
    //主轴对齐方式
    justifyContent:'space-between',
    marginTop:30
},
style_view_unlogin: {
    fontSize: 12,
    color:'red',
    marginLeft: 10,
},
});