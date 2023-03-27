import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useRef,useEffect} from 'react'
import { SliderBox } from "react-native-image-slider-box";
import Lottie from 'lottie-react-native';
const Caraouselanimation = ({navigation}) => {
  const images = [
    require('../assets/Images/dietplanning.png'),
    require('../assets/Images/content.png'),
    require('../assets/Images/email.png'),
    require('../assets/Images/travel.png'),
  ]


  

  return (
    <View style={{}}>
     <SliderBox images={images} dotColor="red" 
     style={{ resizeMode: "contain", height: 160, width: 400}}
     inactiveDotColor="grey"
     imageLoadingColor="#3F5180"
     autoplay={true}
     circleLoop={true}
   
     
   
     autoplayInterval={1500}
     dotStyle={{height:11,width:11,borderRadius:20,top:30}}
     /> 
    </View>
  )
}

export default Caraouselanimation

const styles = StyleSheet.create({})