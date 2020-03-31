import React, { Component } from 'react'
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,   
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {Icon } from '@ant-design/react-native';
export default class Goods extends Component {
    render() {
        return (
          <ScrollView>
          <StatusBar barStyle="dark-content" />
          <View style={styles.search}>
            <View style={styles.searchContent}>
              <View style={styles.searchContent1}>
                <TextInput style={styles.input} placeholder='请输入商品名称' placeholderTextColor="#a0a0a0"/>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Icon name="search"  color="#a0a0a0" />
                </TouchableOpacity> 
              </View>
            </View>
          </View>
          <View style={styles.search0}>
          </View>
          <View style={styles.boxNav}>
            <View style={styles.boxNavContent}>
              <View style={styles.boxNavword1}><Text style={{color:"red",fontSize:16}}>综合</Text></View>
              <View style={styles.boxNavword}><Text style={{fontSize:16,color:"#4F4F4F"}}>销量</Text></View>
              <View style={styles.boxNavword}><Text style={{fontSize:16,color:"#4F4F4F"}}>新品</Text></View>
              <View style={styles.boxNavword}><Text style={{fontSize:16,color:"#4F4F4F"}}>价格</Text></View>
              <View style={styles.boxNavword}><Text style={{fontSize:16,color:"#4F4F4F"}}>信用</Text></View>
            </View>
          </View>
          <View style={styles.boxContent}>
            <View style={styles.boxContentContent}>
              <View style={styles.boxShop}>
                <View style={styles.shopImage}>
                <Image
                  source={require('../../assets/jia.png')}
                  style={{width:150, height:150 }}
                  resizeMode='center'
                /> 
                </View>
                <Text style={styles.shopWord1}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                <Text style={styles.shopWord2}>36.00</Text>
              </View>
              <View style={styles.boxShop}>
              <View style={styles.shopImage}>
                <Image
                  source={require('../../assets/shu.png')}
                  style={{width:150, height:150 }}
                  resizeMode='center'
                /> 
                </View>
                <Text style={styles.shopWord1}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                <Text style={styles.shopWord2}>36.00</Text>
              </View>
              <View style={styles.boxShop}>
              <View style={styles.shopImage}>
                <Image
                  source={require('../../assets/jia.png')}
                  style={{width:150, height:150 }}
                  resizeMode='center'
                /> 
                </View>
                <Text style={styles.shopWord1}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                <Text style={styles.shopWord2}>36.00</Text>
              </View>
              <View style={styles.boxShop}>
              <View style={styles.shopImage}>
                <Image
                  source={require('../../assets/shu.png')}
                  style={{width:150, height:150 }}
                  resizeMode='center'
                /> 
                </View>
                <Text style={styles.shopWord1}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                <Text style={styles.shopWord2}>36.00</Text>
              </View>
              <View style={styles.boxShop}>
              <View style={styles.shopImage}>
                <Image
                  source={require('../../assets/jia.png')}
                  style={{width:150, height:150 }}
                  resizeMode='center'
                /> 
                </View>
                <Text style={styles.shopWord1}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                <Text style={styles.shopWord2}>36.00</Text>
              </View>
              <View style={styles.boxShop}>
              <View style={styles.shopImage}>
                <Image
                  source={require('../../assets/shu.png')}
                  style={{width:150, height:150 }}
                  resizeMode='center'
                /> 
                </View>
                <Text style={styles.shopWord1}>Oishi/上好佳玉米卷20包膨化休 闲食品Oishi/上好佳</Text>
                <Text style={styles.shopWord2}>36.00</Text>
              </View>
            </View>
          </View>
          </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    search:{
      width:"100%",
      height:55,
      backgroundColor:'#fff',
      flexDirection:'row',
      justifyContent:'center'
    },
    search0:{
      width:"100%",
      height:3,
      backgroundColor:'#f4f4f4'
    },
    searchContent:{
      width:"95%",
      height:55,
      backgroundColor:"#fff",
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    searchContent1:{
      width:"95%",
      height:40,
      backgroundColor:"#eeeeee",
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
      borderRadius:5,
      color:"#a0a0a0",
    },
    input:{
      height:35,
      width:'80%',
      color:"#a0a0a0",
      justifyContent:'center',
    },
    touchableOpacity:{
      width:40,
      height:40,
      alignItems:'center',
      justifyContent:'center',
    },
    boxNav:{
      width:"100%",
      height:60,
      backgroundColor:"#fff",
      flexDirection:'row',
      justifyContent:'center'
    },
    boxNavContent:{
      width:"95%",
      height:60,
      backgroundColor:"#fff",
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
      color:"#a0a0a0",
    },
    boxNavword:{
      color:'#000',
      height:40,
      width:"20%",
      alignItems:'center',
      justifyContent:'center',
    },
    boxNavword1:{
      height:40,
      width:"20%",
      alignItems:'center',
      justifyContent:'center',
    },
    boxContent:{
      width:"100%",
      height:1000,
      flexDirection:'row',
      justifyContent:'center',
      backgroundColor:'#f4f4f4'
    },
    boxContentContent:{
      width:"95%",
      height:1000,
      flexDirection:'row',
      justifyContent:'space-between',
      flexWrap:'wrap'
    },
    boxShop:{
      width:"49%",
      height:310,
      marginTop:10,
      backgroundColor:"#fff",
      alignItems:'center',
    },
    shopImage:{
      width:'90%',
      height:225,
      color:"#a0a0a0",
      justifyContent:'center',
      alignItems:'center',
    },
    shopWord1:{
      width:'90%',
      height:40,
      color:"#a0a0a0",
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:10,
    },
    shopWord2:{
      width:'90%',
      height:20,
      color:"red",
      justifyContent:'space-between',
    }
});
  
