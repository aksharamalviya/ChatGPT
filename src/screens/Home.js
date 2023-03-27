import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Caraouselslider from "../components/Caraouselslider";
import Flatlistheaders from "../components/Flatlistheaders";
import Header from "../components/Header";
import Caraouselanimation from "../components/Caraouselanimation";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 ,backgroundColor:'#fff'}}>
      

    <Header navigation={navigation}/>
    
      {/* <Caraouselslider navigation={navigation} /> */}
     <Caraouselanimation navigation={navigation}/>
     
      <Text style={{fontSize:18,color:'#fff',fontWeight:'500',marginLeft:15,marginTop:20}}>Categories</Text>
      <Flatlistheaders navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
