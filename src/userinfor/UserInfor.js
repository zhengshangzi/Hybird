import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage,
    ToastAndroid,
    StatusBar
} from 'react-native';
import {Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux';

const options = {
    title: '选择图片', 
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照', 
    chooseFromLibraryButtonTitle: '选择照片从本地', 
    customButtons: [
        {name: 'fb', title: '选择照片从Facebook'},
      ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};
       
export default class UserInfor extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:"",
            username:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('imgInit')
        .then((res)=>{
            console.log(res)
            if(res==null){
                this.setState({
                    imageUrl:require('../../assets/1.png')
                });
            }
            else{
                this.setState({
                    imageUrl:JSON.parse(res),
                });
            }
        });
        AsyncStorage.getItem('user')
        .then((res)=>{
            if(res==null){
                this.setState({
                    username:'build'
                });
            }
            else{
            let user=JSON.parse(res);
            console.log("user"+user.username);
            this.setState({
                username:user.username
            })
        }
        })
    }
    
    take=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } 
            else if (response.error) {
              console.log('Error:', response.error);
            } 
            else if (response.customButton) {
              console.log('custom:', response.customButton);
            } 
            else {
              const source = { uri: response.uri };
              this.setState({
                imageUrl: source,
              });
              console.log(source);
              AsyncStorage.setItem('imgInit',JSON.stringify(source));
              AsyncStorage.getItem('imgInit')
              .then((res)=>{
                  console.log(JSON.parse(res));   
              })
            }
          });
    }
    leave=()=>{
        AsyncStorage.removeItem("user")
        .then(res=>{
            if(!res){
                console.log('退出成功')
            }
            else{
                console.log('退出失败')
            }
        })
        // this.setState({
        //     username:''
        // })
        Actions.reset('login');
    }
    render() {
        return (
            <ScrollView>
            <StatusBar backgroundColor='red'/>
 
            <View style={{backgroundColor:'#eeeeee'}}>
                <View style={styles.head}>
                    <TouchableOpacity
                        onPress={()=>{this.take()}}
                    >
                        <Image source={this.state.imageUrl}  style={styles.img}/>
                    </TouchableOpacity>
                    {/* <Image source={require('../assets/1.png')} style={styles.img}/> */}
                    <Text style={styles.name}>{this.state.username}</Text>
                </View>
                <View style={{width:'100%',marginBottom:10}}>
                    <View style={styles.bar}>
                        <View style={styles.barc}>
                            <Image source={require('../../assets/4.png')} style={{width:20,height:20,}} resizeMode='center'/>
                            <Text style={styles.bartext}>我的个人中心</Text>
                        </View>
                    </View>
                    <View style={styles.box1}>
                        <View style={styles.box}>
                            <Icon name="setting" size="md" color="#9a9a9a"/>
                            <Text style={styles.text}>账户管理</Text>
                        </View>
                        <View style={styles.box}>
                            {/* <Icon name="environment" size="md" color="#9a9a9a"/> */}
                            <Image source={require('../../assets/dizhi.png')} style={{width:20,height:20,}} resizeMode='center'/>
                            <Text style={styles.text}>收货地址</Text>
                        </View>
                        <View style={styles.box}>
                            {/* <Icon name="solution" size="md" color="#9a9a9a"/> */}
                            <Image source={require('../../assets/66.png')} style={{width:20,height:20,}} resizeMode='center'/>
                            <Text style={styles.text}>我的信息</Text>
                        </View>
                        <View style={styles.box}>
                            {/* <Icon name="profile" size="md" color="#9a9a9a"/> */}
                            <Image source={require('../../assets/order.png')} style={{width:20,height:20,}} resizeMode='center'/>
                            <Text style={styles.text}>我的订单</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon name="qrcode" size="md" color="#9a9a9a"/>
                            <Text style={styles.text}>我的二维码</Text>
                        </View>
                        <View style={styles.box}>
                            <Image source={require('../../assets/score.png')} style={{width:20,height:20,}} resizeMode='center'/>
                            <Text style={styles.text}>我的积分</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon name="star" size="md" color="#9a9a9a"/>
                            <Text style={styles.text}>我的收藏</Text>
                        </View>
                       
                    </View>
                </View>
                <View style={{width:'100%'}}>
                    <View style={styles.bar}>
                        <View style={styles.barc}>
                            <Icon name="tag" size="md" color="#9a9a9a"/>
                            <Text style={styles.bartext}>E族活动</Text>
                        </View>
                    </View>
                    <View style={styles.box2}>
                        <View style={styles.box}>
                            {/* <Icon name="tool" size="md" color="#9a9a9a"/> */}
                            <Image source={require('../../assets/weixiu.png')} style={{width:20,height:20,}} resizeMode='center'/>
                            <Text style={styles.text}>居家维修保养</Text>
                        </View>
                        <View style={styles.box}>
                            {/* <Icon name="car" size="md" color="#9a9a9a"/> */}
                            <Image source={require('../../assets/car.png')} style={{width:20,height:20,}} resizeMode='center'/>
                            <Text style={styles.text}>出行接送</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon name="user" size="md" color="#9a9a9a"/>
                            <Text style={styles.text}>我的受赠人</Text>
                        </View>
                        <View style={styles.box}>
                            <Image source={require('../../assets/zhusu.png')} style={{width:20,height:20,}} resizeMode='center'/>
                            <Text style={styles.text}>我的住宿优惠</Text>
                        </View>
                        <View style={styles.box}>
                            {/* <Icon name="flag" size="md" color="#9a9a9a"/> */}
                            <Image source={require('../../assets/huodong.png')} style={{width:20,height:20,}} resizeMode='center'/>
                            <Text style={styles.text}>我的活动</Text>
                        </View>
                        <View style={styles.box}>
                        <TouchableOpacity
                            onPress={()=>{Actions.myissue()}}
                            style={{justifyContent:"center",alignItems:"center"}}
                        >
                            <Icon name="form" size="md" color="#9a9a9a"/>
                            <Text style={styles.text}>我的发布</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    
                </View>
                <View style={styles.bottom}>
                    <Text style={{color:"#9a9a9a"}}>{this.state.username} |  </Text><TouchableOpacity  onPress={this.leave}><Text style={{color:"#9a9a9a"}}>退出登录</Text></TouchableOpacity> 
                </View>
            </View>
            </ScrollView>
        )}
}
const styles=StyleSheet.create({
    head:{
        backgroundColor:'#f23030',
        width:'100%',
        height:200,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:100,
        height:100,
        borderRadius:50,
        borderColor:"#fff",
        borderWidth:2
    },
    name:{
        color:"#fff",
        marginTop:10,
        fontSize:18
    },
    bar:{
        backgroundColor:'#fff',
        marginBottom:3,
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    barc:{
        width:"90%",
        flexDirection:'row',
        alignItems:'center'
    },
    bartext:{
        color:'#9a9a9a',
        marginLeft:10
    },
    box1:{
        backgroundColor:'#fff',
        width:'100%',
        height:240,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    box2:{
        backgroundColor:'#fff',
        width:'100%',
        height:160,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    box:{
        height:80,
        width:'33.3%',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#9a9a9a',
        marginTop:5
    },
    bottom:{
        width:'100%',
        height:70,
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    }
})
