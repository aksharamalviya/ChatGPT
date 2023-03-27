import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useRef,useEffect} from 'react'
import Lottie from 'lottie-react-native';
const Kids = ({navigation}) => {

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
        <Image source={require('../assets/Images/backarrow.png')} style={{height:20,width:20,resizeMode:'contain',tintColor:'#fff'}}/>
      <Text style={{marginLeft:35,fontSize:23,color:'#db1f83',fontWeight:'500'}}>Kids Zone</Text>
    </TouchableOpacity>
    <View style={{alignSelf:'flex-start',flexDirection:'row'}}>
        {/* <Image source={require('../assets/Images/contentwriting.png')} style={{height:50,width:50,resizeMode:'contain',borderRadius:25,marginLeft:10}}/> */}
  
        <Lottie source={require('../assets/Images/cat.json')}
       useRef={animationRef}
        autoPlay={true}
        style={{height:70,width:70}}
        loop={true}
        />
        <View>
      <Text style={{color:'#FFF'}}>With dwellfox</Text>
     <View style={{marginTop:10,backgroundColor:'#ae94e3',borderRadius:10,paddingLeft:7,padding:3}}>
      <Text style={{}}> Find your  Best for kids</Text>
      
     </View>

     

     </View>
     <Lottie source={require('../assets/Images/kids.json')}
       useRef={animationRef}
        autoPlay={true}
        style={{height:70,width:70}}
        loop={true}
        />
    </View>

    
    </View>
  )
}

export default Kids

const styles = StyleSheet.create({})