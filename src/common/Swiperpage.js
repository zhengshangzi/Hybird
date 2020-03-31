import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image, ScrollView, AsyncStorage, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';
import Button from 'react-native-button' ;
export default class Swiperpage extends Component {
    start =()=>{
        AsyncStorage.setItem('isInstall','true',()=>{
            console.log('store end')
        });
        this.props.afterInstall();
    }
    render() {
        return (
                <Swiper style={styles.wrapper} showsButtons={false}>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../../assets/slide1.jpeg')} />
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../../assets/slide2.jpg')} />
                    </View>
                    <View style={styles.slide1}>
                        <Image style={styles.img} source={require('../../assets/slide3.jpeg')}/>
                        <TouchableOpacity onPress={this.start} style={styles.start}><Text style={{color: '#fff',fontSize:22,textAlign:'center'}}>开始体验</Text></TouchableOpacity>
                    </View>
                </Swiper>
        )
    }
}
const styles=StyleSheet.create({
    img:{
        width:'100%',
        height:'100%'
    },
    slide1:{
        flex:1,
        alignItems:'center',
        height:'100%'
    },
    start:{
        position: 'absolute',
        bottom:80,
        right:40,
        width:40,
        height:160,
        borderColor:'white',
        borderWidth:1,
        borderRadius:20,
        fontSize:16,
        justifyContent: 'center',
        alignItems: 'center',
        color:'#fff',
        textAlignVertical:'center',
    },

})
