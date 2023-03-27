import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";


const slides = [
  {
    key: 1,
    
    image: require('../assets/Images/onbording.png'),
  },
  {
    key: 2,
   

    image: require('../assets/Images/onbording2.png'),
  },
  {
    key: 3,
    
    image: require('../assets/Images/onbording3.png'),
  },
  {
    key: 4,
    
    image: require('../assets/Images/onbording4.png'),
  },

];

const Slider = ({ navigation }) => {
  const slider = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    slider.current.goToSlide(activeSlide, true);
  }, [activeSlide]);

  const renderItem = ({ item, index }) => {
    return (
      // <View
      //   style={{
      //     flex: 1,
      //     flexDirection: index == 1 ? "column-reverse" : "column",
      //     marginBottom: index == 1 ? 190 : 20,
      //   }}
      // >
      //   <Text style={styles.TEXT}>{item.text}</Text>
      //   <Text style={styles.TEXT2}>{item.text2}</Text>
      //   <Image source={item.image} style={styles.image} />
      // </View>

      <View>
          <TouchableOpacity
             onPress={()=> navigation.navigate('Tabnavigation')}
               style={{
                 marginRight: 15,
                
                 alignSelf: "flex-end",
                 
              }}
             >
               <Text style={{color:'#000',fontSize:17,fontWeight:'500'}}>Skip</Text>
             </TouchableOpacity> 
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1,backgroundColor:'#fff' }}>
      {/* <Headercomponent
        title={"Skip"}
        onSkipPress={() => navigation.navigate("Login")}
        onPress={() => {
          activeSlide == 0
            ? Alert.alert("slides complete")
            : setActiveSlide(activeSlide - 1);
        }}
      /> */}
       {/* <View>
        <Header
          backArrow={true}
          rightComponent={ */}
             {/* <TouchableOpacity
             onPress={()=> navigation.navigate('Tabnavigation')}
               style={{
                 marginRight: 30,
                marginTop:10,
                 alignSelf: "flex-end",
                 
              }}
             >
               <Text style={{color:'#000',fontSize:17,fontWeight:'500'}}>Skip</Text>
             </TouchableOpacity> */}
          {/* }
        />
      </View>  */}
      
      <AppIntroSlider
        ref={(ref) => (slider.current = ref)} // the ref
        activeDotStyle={styles.paginationdots}
        dotStyle={styles.dotpaginationdots}
        renderItem={renderItem}
        onSlideChange={(index) => setActiveSlide(index)}
        data={slides}
        showNextButton={false}
        showDoneButton={false}
        showPrevButton={false}
        showSkipButton={false}
      />
      <TouchableOpacity
        style={styles.roundbtn}
        onPress={() => {
          activeSlide == slides.length - 1
            ? navigation.navigate("Tabnavigation")
            : setActiveSlide(activeSlide + 1);
        }}
      >
        
        <Text>Next</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  paginationdots: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#3F5180",
     top: 20,
    right: 120,
    
    
  },
  dotpaginationdots: {
     top: 20,
    height: 10,
    width: 10,
    
    borderRadius: 5,
    backgroundColor: "#B6C5EB",
    right: 120,
   
    
  },
  roundbtn: {
    // borderWidth:1,
    borderRadius:15,
    paddingHorizontal:20,
    padding:8,
    backgroundColor:'#6A86CC',
    // left: 290,
    alignSelf:'flex-end',
     bottom:40,
    marginRight:30
    // bottom: 120,
  },
  image: {
    // top: 16
    // height: 600,
    // width: 600,
    height:'100%',
    width:'100%',
    // resizeMode:'contain',
     
     
    alignSelf:'center'
    // marginTop:70,
    
  
    // left: 90,
  },
 
});
