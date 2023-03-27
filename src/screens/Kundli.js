import {
    FlatList,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    View,
    Modal,
    ScrollView,
    ActivityIndicator,
  } from "react-native";
  import React, { useEffect, useState,useRef } from "react";
  import axios from "axios";
  import Lottie from 'lottie-react-native';
  
import Textinputcomponent from "../components/Textinputcomponent";

const Kundli = ({navigation}) => {

const [loading,setLoading] = useState(false)
const animationRef = useRef<Lottie>(null)

useEffect(() => {
    animationRef.current?.play()

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, [])

 


  return (
    <View style={{flex:1,backgroundColor:'#000'}}>
      <TouchableOpacity style={{flexDirection:'row',margin:10,marginTop:15}}
      onPress={()=> navigation.goBack()}
      >
        <Image source={require('../assets/Images/backarrow.png')} style={{height:20,width:20,resizeMode:'contain',tintColor:'#FFF'}}/>
      <Text style={{marginLeft:35,fontSize:23,color:'#f03535',fontWeight:'500'}}>Birth Kundli</Text>
    </TouchableOpacity>

    <View style={{alignSelf:'flex-start',flexDirection:'row'}}>
        {/* <Image source={require('../assets/Images/contentwriting.png')} style={{height:50,width:50,resizeMode:'contain',borderRadius:25,marginLeft:10}}/> */}
  
        <Lottie source={require('../assets/Images/planet.json')}
       useRef={animationRef}
        autoPlay={true}
        style={{height:70,width:70}}
        loop={true}
        />
        <View>
      <Text style={{color:'#fff'}}>With dwellfox</Text>
     <View style={{marginTop:10,backgroundColor:'#f57f5b',borderRadius:10,paddingLeft:7,padding:3}}>
      <Text style={{}}> Find your birth  kundli Detail</Text>
      
     </View>

     

     </View>
     <Lottie source={require('../assets/Images/star.json')}
       useRef={animationRef}
        autoPlay={true}
        style={{height:70,width:70}}
        loop={true}
        />
    </View>

    <Lottie source={require('../assets/Images/ballon.json')}
       useRef={animationRef}
        autoPlay={true}
        style={{height:70,width:70,alignSelf:'center'}}
        loop={true}
        />

   <Textinputcomponent/>

  



    </View>
  )
}

export default Kundli

const styles = StyleSheet.create({
 
})