import React, { Component } from 'react'
import {View,Text,Button,AsyncStorage, ActivityIndicator,StyleSheet,ScrollView,ToastAndroid,StatusBar,TouchableOpacity} from 'react-native'
var replay= ['已回复','待回复'];
var i;
export default class MyIssue extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            page:1,
            isLoad:false
        }
    }
    //发请求
    componentDidMount(){
        fetch(
          `https://cnodejs.org/api/v1/topics?page=${   
            this.state.page 
          }&limit=10`
        )
        .then((res)=>res.json())
        .then((res)=>{
            const data=res.data;
            for(var j=0;j<res.data.length;j++){
                i=Math.random()*2;
                data[j].replay=replay[Math.floor(i)];
            }
            this.setState({
                data:data,
                isLoad:true
            }) 
        })
    };
    //每次更新完毕执行
    componentDidUpdate(prevProps,prevState){
        console.log('pre'+prevState.page)
        console.log('now'+this.state.page)       
        if(prevState.page!==this.state.page){
            let page=this.state.page;
            fetch(
              `https://cnodejs.org/api/v1/topics?page=${   
                this.state.page 
              }&limit=10`
            )
            .then((res)=>res.json())
            .then((res)=>{
                const data=res.data;
                for(var j=0;j<res.data.length;j++){
                    i=Math.random()*2;
                    data[j].replay=replay[Math.floor(i)];
                }
                this.setState({
                    data:data,
                    isLoad:true
                })  
            })
        }
    }
    next=()=>{
        this.setState((state)=>{
            return {
                page: state.page+1 ,
                isLoad:false
            }
        })
    };
    pre=()=>{
        console.log(this.state.page)
        if((this.state.page-1)==0){
            ToastAndroid.show('已经是第一页，无上一页',100);
        }
        else{
        this.setState((state)=>{
            return {
                page: state.page-1,
                isLoad:false

            }
        })
        }
    }
    render() {
        return (
            <View>
                <StatusBar translucent={true} backgroundColor='transparent'/>
                <ScrollView>
                <View style={{height:503,marginTop:10}}>
                    { this.state.isLoad?(this.state.data.map((item)=>(
                        <View style={styles.rows}>
                            {/* <Text style={styles.title} numberOfLines={1}>{item.title}</Text> */}
                            <Text style={styles.title} numberOfLines={1}>{item.title ? (item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title) : ""}</Text>
                            <Text style={{marginLeft:"20%"}}>{item.create_at.substring(0,10)}</Text>
                            <Text style={item.replay=='已回复'?styles.style1:styles.style2}>{item.replay}</Text>
                        </View>
                    ))
                    ):<ActivityIndicator color="red" size='large'/>
                }
                </View>
                <View style={styles.pagebox}>
                    <TouchableOpacity style={styles.pagebutton} onPress={()=>{this.pre()}}>
                        <Text style={{fontSize:18,color:'#fff'}}>上一页</Text>
                    </TouchableOpacity> 
                    <Text style={{fontSize:18,marginRight:'16.5%',marginLeft:'16.5%'}}>第{this.state.page}页</Text>
                    <TouchableOpacity style={styles.pagebutton}>
                        <Text style={{fontSize:18,color:'#fff'}} onPress={()=>{this.next()}}>下一页</Text>
                    </TouchableOpacity> 
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    rows:{
        width:'100%',
        height:50,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        borderBottomColor:'#eee',
        borderBottomWidth:2,
        backgroundColor:'#fff'
    },
    title:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'2.5%',
        color:'#000000',
        width:"45%",
        fontSize:14,
        overflow:'hidden',
    },
    style1:{
        marginRight:"2.5%",
        marginLeft:'5%'
    },
    style2:{
        marginRight:"2.5%",
        marginLeft:'5%',
        color:'red'
    },
    pagebox:{
        marginTop:0,
        height:70,
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#fff"
    },
    pagebutton:{
        backgroundColor:'red',
        height:40,
        width:120,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
    },

})

