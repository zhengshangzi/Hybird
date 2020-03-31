import React,{Component,useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, BackHandler,ToastAndroid, AsyncStorage } from 'react-native';
import {Router,Scene,Tabs,Drawer,Lightbox,Modal, Overlay, Actions} from "react-native-router-flux";
import Home from './src/home/Home';
import Goods from './src/goods/Goods';
import UserInfor from './src/userinfor/UserInfor';
import Login from './src/common/Login';
import {Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen'
import Swiperpage from './src/common/Swiperpage';
import MyIssue from './src/userinfor/MyIssue'
import Logon from './src/common/Logon'
console.disableYellowBox=true;//黄框消失
const App = () => {
  let [isLogin,setLogin]=useState(false);
  let [isInstall,setInstall]=useState(true);
  let now=0;
  let init=()=>{
    AsyncStorage.getItem('isInstall')
    .then(res=>{
      console.log('install',res)
      if(res){
        setInstall(false)
      }
    })
    // AsyncStorage.clear()
    // AsyncStorage.removeItem("user");
    AsyncStorage.getItem('user')
    .then(res=>{
      let user=JSON.parse(res);
      console.log(user)
      if(!user){
        SplashScreen.hide();
      }
      if(user&&user.token){
        setLogin(true);
        SplashScreen.hide();
      }
      //console.log(res)
    })
  }
  useEffect(()=>{
    init();
  },[])
  let afterInstall=()=>{
    console.log('afterinstall')
    setInstall(false)
  }
  if(isInstall){
    return <View style={{flex:1}}>
    <Swiperpage afterInstall={afterInstall}/>
  </View>
  }
  return (
  <Router
    backAndroidHandler={()=>{
      if(Actions.currentScene != 'login'&&Actions.currentScene != 'home'){
        Actions.pop();
        return true;
      }
      else{
        if(new Date().getTime()-now<2000){
          BackHandler.exitApp();
        }else{
          ToastAndroid.show('确定要退出吗',100);
          now = new Date().getTime();
          return true;
        }
      }
      
    }}>    
     <Overlay>
        <Modal key='modal'hideNavBar> 
        <Lightbox key='lightbox'>
    <Scene key="root">
      <Tabs
        key="tabbar"
        hideNavBar
        tabBarStyle={{backgroundColor: "#fff"}}
        activeTintColor="red"
        inactiveTintColor="#9a9a9a"
      >
      {/**首页栏 */}
      <Scene  
        title='首页'
        key='homePage'
        hideNavBar
        icon={
          ({focused})=><Icon name="home" size="md" color={focused?'red':"#9a9a9a"}/>
        }     
      >
        <Scene key='home' component={Home}	/>
      </Scene>
      {/* 商品分类栏 */}
      <Scene  
        key='goodsPage'        
        hideNavBar
        title='商品分类'
        icon={
          ({focused})=><Icon name="appstore" size="md" color={focused?'red':"#9a9a9a"}/>
        }    
      >
        <Scene key='goods'component={Goods}></Scene>
      </Scene>
      {/* 个人中心栏 */}
      <Scene  
        key='userPage'
        title='个人中心'
        icon={
          ({focused})=><Icon name="user" size="md" color={focused?'red':"#9a9a9a"}/>
        }      
      >
          <Scene key='user' hideNavBar component={UserInfor}/>
        <Scene 
          title='我的发布'
          key='myissue' 
          component={MyIssue}  
          hideTabBar
          rightButtonStyle={{color:'#fff'}}
          backButtonImage={require('./assets/back.png')}
          renderRightButton={<Icon name='ellipsis' style={{marginRight:20,color:'#fff'}}/>}
          navigationBarStyle={{backgroundColor: "red"}}
          titleStyle={{flex:1,textAlign:'center',color:'#fff',fontSize:22,}}
        />
      </Scene>
      </Tabs>
    </Scene>
    </Lightbox>
    <Scene key='login' component={Login} initial={!isLogin}/>
    <Scene key='logon' component={Logon} />

    {/* <Scene key="login" component={ShowMyName}/> */}
    </Modal>
    {/* <Scene component={Message}/> */}
    </Overlay>
  </Router>
  );
};
const styles = StyleSheet.create({
  
});
export default App;
