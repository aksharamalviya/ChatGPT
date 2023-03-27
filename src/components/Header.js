import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React, { useEffect, useState,useRef } from "react";
 
  import Lottie from 'lottie-react-native';
const Header = ({navigation}) => {

  const animationRef = useRef<Lottie>(null)
  
  useEffect(() => {
    animationRef.current?.play()

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, [])

  return (
    <View style={{flexDirection:'row',margin:8,alignItems:'center'}}>
        <Image source={require('../assets/Images/profile.png')} style={{height:50,width:50,resizeMode:'contain'}}/>
      
        <Text style={{color:'#fff',marginLeft:10}}>Hi dwellfox!</Text>
        <Lottie source={require('../assets/Images/ballons.json')}
     useRef={animationRef}
      autoPlay={true}
      style={{height:60,width:80}}
      loop={true}
      />
      <TouchableOpacity onPress={()=> navigation.navigate('Animationscreen')}>
      <Image source={require('../assets/Images/notificationbell2.png')} style={{height:20,width:20,marginLeft:100}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})