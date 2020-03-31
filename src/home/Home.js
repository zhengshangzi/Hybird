import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    FlatList
} from 'react-native';
import {Icon } from '@ant-design/react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
const data=[
    {
        bgcolor:"#ffcccc",
        img:require('../../assets/75.png'),
        title:'居家维修装修',
    },
    {
        bgcolor:"#ffe1b1",
        img:require('../../assets/76.png'),
        title:'住宿优惠',
    },
    {
        bgcolor:"#bfe6ac",
        img:require('../../assets/77.png'),
        title:'出行活动',
    },
    {
        bgcolor:"#c3ddf2",
        img:require('../../assets/78.png'),
        title:'E族活动',
    }
]
export default class Home extends Component {
    render() {
        return (
            <ScrollView>
                <StatusBar translucent={true} backgroundColor='transparent'/>
                <View style={{
                        backgroundColor:'#eeeeee',
                        flex:1
                }}>
                    <View style={styles.head}>
                        <View style={styles.search}>
                            <TouchableOpacity style={{marginLeft:20}}>
                                <Icon name="search" size='md' color="#fff" />
                            </TouchableOpacity> 
                            <TextInput placeholder='请输入您要搜索的关键字' placeholderTextColor="#fff"/>
                        </View>
                        <TouchableOpacity>
                            <Icon name="shopping-cart" size='md' color="#fff" />
                        </TouchableOpacity> 
                    </View>
                    <View style={{width:'100%',height:230,backgroundColor:'#f23030'}}>
                        <Swiper showsButtons={false}>
                            <View >
                            <Image
                                source={require('../../assets/38.png')}
                                style={{width:"100%",height:230}}
                            /> 
                            </View>
                            <View>
                            <Image
                                source={require('../../assets/37.png')}
                                style={{width:"100%",height:230}}
                            /> 
                            </View>
                        </Swiper>
                    </View>
                    <View>
                        <FlatList 
                            data={data} 
                            style={{backgroundColor:"#f4f4f4"}}
                            renderItem={({item})=>(
                                <View style={styles.rows}>
                                    <View style={{
                                            width:68,
                                            height:68,
                                            backgroundColor:item.bgcolor,
                                            borderRadius:34,
                                            justifyContent:'center',
                                            alignItems:'center',
                                            marginLeft:'4%'
                                    }}>
                                        <Image source={item.img} resizeMode="center"/>
                                    </View>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <TouchableOpacity style={{marginLeft:"43%",}}>
                                        <Icon name="right" size='md' color="#a0a0a0" />
                                    </TouchableOpacity> 
                                </View>
                            )}
                        />
                    </View>
                    <View style={styles.buttonbox}>
                        <Button 
                            style={{
                                justifyContent:'center',
                                width:400,height: 45,
                                borderRadius: 5,
                                textAlignVertical: 'center',
                                backgroundColor:'red',
                                color: '#fff'
                            }}
                        >发布需求</Button>
                    </View> 
                    <View style={styles.bottom}>
                        <Text style={{color:'#a0a0a0'}}>©E族之家 版权所有</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    head:{
        width:'100%',
        height:50,
        backgroundColor:'#f23030',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    search:{
        backgroundColor:"#fbb8b8",
        width:'85%',
        height:35,
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
    },
    rows:{
        width:'100%',
        height:80,
        backgroundColor:'#fff',
        marginTop:10,
        alignItems:'center',
        flexDirection:'row'
    },
    title:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'6%',
        color:'#a0a0a0',
        width:"20%",
        fontSize:16
    },
    buttonbox:{
        width:"100%",
        marginTop:20,
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    bottom:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        marginBottom:10
    }
})
