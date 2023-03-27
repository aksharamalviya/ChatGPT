import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-native-anchor-carousel";

const Caraouselslider = () => {
  const data = [
    {
      img: require("../assets/Images/dietplanning.png"),
      text: "Lorem ipsum dotor seat amet consectour",
      offer: "20 % OFF",
    },
    {
      img: require("../assets/Images/content.png"),
      text: "Lorem ipsum dotor seat amet consectour",
      offer: "20 % OFF",
    },
    {
      img: require("../assets/Images/travel.png"),
      text: "Lorem ipsum dotor seat amet consectour",
      offer: "20 % OFF",
    },
    {
      img: require("../assets/Images/email.png"),
      text: "Lorem ipsum dotor seat amet consectour",
      offer: "20 % OFF",
    },
  ];
  const slider = useRef();

  const renderItem = ({ item, index }) => {
    return (
      // <TouchableOpacity style={{borderWidth:1,backgroundColor: '#C29DEF',width:'100%',borderRadius:10,flexDirection:'row',marginTop:30,marginBottom:20}}>
      //   <View style={{width:'50%',flexDirection:'column',justifyContent:'space-evenly',marginLeft:13}}>
      //     <Text style={{fontSize:24,color:'#fff',fontWeight:'800'}}>{item.offer}</Text>
      //   <Text style={{fontSize:14,color:'#000',fontWeight:'500'}}>{item.text}</Text>

      //  </View>

      // </TouchableOpacity>

      <View style={{}}>
        <Image
          source={item.img}
          style={{ width: "100%", height: 140, resizeMode: "stretch" }}
        />
      </View>
    );
  };

  return (
    <View>
      <Carousel style={styles.carousel} data={data} renderItem={renderItem} />
    </View>
  );
};

export default Caraouselslider;

const styles = StyleSheet.create({
  carousel: {
    //  bottom:110,
   
    height: 160,
  },
});
