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
import React, { useEffect, useState ,useRef} from "react";
import axios from "axios";
import {Picker} from '@react-native-picker/picker';
import Lottie from 'lottie-react-native';
import * as Animatable from "react-native-animatable";
const Dietplan = ({ navigation }) => {
  const [data, setData] = useState();
  const apikey = "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";
  const apiUrl = "https://api.openai.com/v1/completions";
  // const [textinput, setTextInput] = useState("");
  // const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [loading, setLoading] = useState(false);
  const [meal, setMeal] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const [selectedveggie, setSelectedVeggie] = useState(); 
  const [isClickedveggie,setIsClickedVeggie] = useState(false);
  const [isClicked,setIsClicked] = useState(false);



  const animationRef = useRef<Lottie>(null)
  
  useEffect(() => {
    animationRef.current?.play()

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, [])

  
  const data2 = [
    {
      List : ' Male'
    },
    {
      List :'Female'
    }
  ];

  const data3 = [
    {
      name :'Vegeterian'
    },
    {
      name :'Non-Vegeterian'
    }
  ]



  const handleSend = async () => {
    
    setLoading(true);
    
    try {
      const prompt = `Suggest Best Diet Chat for ${meal} who is ${selectedValue} and the  age is  ${age} having height ${height} and weight  ${weight} in 15 points with lunch  ? `;
      //  `${txt1}${txt2}`
      //  "write content on "+textinput+"on topic of"+textinput

      const response = await axios.post(
        apiUrl,
        {
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: 4000,
          temperature: 0.8,
          top_p: 1,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        },

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apikey}`,
          },
        }
      );

      console.log("myprompt", prompt);

      const text = response.data.choices[0].text;

      // setData([
      //   { type: "user", text: prompt },
      //   { type: "bot", text: text },
      // ]);
      console.log("cjdnvjdvn", text);
       setData(text);
      setLoading(false);
      setModalVisible(false);
      setGender("");
      setSelectedValue("");
      setAge("");
      setMeal("");
      setWeight("");
      setHeight("");
      
    } catch (e) {
      console.log("its an error", e);
    }
  };


 

  return (
    <Animatable.View
    animation="slideInUp" iterationCount={3} direction="alternate">
      <TouchableOpacity
        style={{ flexDirection: "row", margin: 10, marginTop: 10,alignItems:'center' }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/Images/backarrow.png")}
          style={{ height: 20, width: 20, resizeMode: "contain" }}
        />
        {/* <Image source={require('../assets/Images/dietplan.png')} style={{height:50,width:50,resizeMode:'contain',borderRadius:25,marginLeft:10}}/> */}
        <Text
          style={{
            marginLeft: 20,
            fontSize: 18,
            color: "#2E9EC8",
            fontWeight: "500",
          }}
        >
          Diet Plan
        </Text>
      </TouchableOpacity>
      <Text style={{ marginLeft: 50 }}>With dwellfox</Text>

      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: "center",
          marginTop:10
        }}
      >


      {/* <Image source={require('../assets/Images/contentwriting.png')} style={{height:50,width:50,resizeMode:'contain',borderRadius:25,marginLeft:10}}/> */}

      <Lottie source={require('../assets/Images/dietlottie2.json')}
     useRef={animationRef}
      autoPlay={true}
      style={{height:70,width:70,marginLeft:10}}
      loop={true}
      />
      

       {/* <Image source={require('../assets/Images/dietplan.png')} style={{height:50,width:50,resizeMode:'contain',borderRadius:25,marginLeft:20}}/>  */}

        <Text
          style={{
            color: "#2E9EC8",
            fontWeight: "500",
            margin: 20,
            marginLeft: 40,
          }}
        >
          Write a Diet Plan On
        </Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Image
            source={require("../assets/Images/plus.png")}
            style={{
              height: 30,
              width: 30,
              marginLeft:40,
              tintColor: "#2E9EC8",
            }}
          />
        </TouchableOpacity>
      </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  alignSelf: "flex-end",
                  justifyContent:'center',
                  alignItems:'center'
                }}
                onPress={() => {
                  setModalVisible(!modalVisible), setData(null);
                }}
              >
                <Image source={require("../assets/Images/xcircle.png")} />
              </TouchableOpacity>
              {/* {data ? (
                 <ScrollView contentContainerStyle={{backgroundColor:'#B6D9F7'}}>
                  <Text style={{ fontSize: 16 ,margin:15,color:'#000'}}>{data}</Text> 

               


                 </ScrollView>




              ) : ( */}
                <View style={{ width: "100%" }}>
                  <TouchableOpacity
                  onPress={()=> {
                    setIsClicked(!isClicked)
                  }}

                   

                    style={{   
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderWidth: 1,
                      alignSelf: "center",

                      borderRadius: 20,
                      borderColor: "lightgrey",
                      width: "90%",
                      paddingLeft: 10,
                      height: 45,
                      alignItems: "center",

                      marginBottom: 20,
                    }}
                  >
                    <TextInput
                      value={selectedValue}
                      onChangeText={(text) => setSelectedValue(text)}
                      // style={styles.textinput5}
                      placeholder="Enter Your Gender..."
                      
                    />
                       

                       {
                      isClicked ? (
                         <Image
                        source={require("../assets/Images/dropup.png")}
                        style={{ height: 30, width: 30, marginRight: 10,tintColor:'grey' }}
                      /> 
                      ) :(
                         <Image
                        source={require("../assets/Images/dropdown.png")}
                        style={{ height: 18, width: 18, marginRight: 10 }}
                      /> 
                      )
                    }
                     
            
                    
                  </TouchableOpacity>         

                {              
                  isClicked ? 
                  <View style={{position:'absolute',zIndex:1,width:'40%',height:100,backgroundColor:'#B1BEC1',borderRadius:10,bottom:19,paddingRight:10,top:50,right:20}}>

                 <FlatList  data={data2}
                 renderItem={({item,index}) => {
                  return(
                    <TouchableOpacity style={{margin:10}} onPress={()=>{
                      setSelectedValue(item.List);
                      setIsClicked(false);
                    }}>
                      <Text style={{color:'#000',fontWeight:'500'}} >{item.List}</Text>
                    </TouchableOpacity>
                  )
                 }}
                 />
                  </View> : null
                }

                  

                  <TextInput
                    value={age}
                    onChangeText={(text) => setAge(text)}
                    style={styles.textinput}
                    placeholder="Enter Your Age..."
                  />
                  <TextInput
                    value={weight}
                    onChangeText={(text) => setWeight(text)}
                    style={styles.textinput}
                    placeholder="Enter Your Weight..."
                  />
                  <TextInput
                    value={height}
                    onChangeText={(text) => setHeight(text)}
                    style={styles.textinput}
                    placeholder="Enter Your Height..."
                  />
                  <TouchableOpacity

onPress={()=> {
  setIsClickedVeggie(!isClickedveggie)
}}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderWidth: 1,
                      alignSelf: "center",

                      borderRadius: 20,
                      borderColor: "lightgrey",
                      width: "90%",
                      paddingLeft: 10,
                      height: 45,
                      alignItems: "center",

                      marginBottom: 20,
                    }}
                  >
                    <TextInput
                      value={selectedveggie}
                      onChangeText={(text) => setSelectedVeggie(text)}
                      // style={styles.textinput5}
                      placeholder="Enter the type of meal..."
                    />
                   
                    
                    {                     
                      isClickedveggie ? (
                         <Image
                        source={require("../assets/Images/dropup.png")}
                        style={{ height: 30, width: 30, marginRight: 10,tintColor:'grey' }}
                      /> 
                      ) :(
                         <Image
                        source={require("../assets/Images/dropdown.png")}
                        style={{ height: 18, width: 18, marginRight: 10 }}
                      /> 
                      )
                    }

                      

                    
                  </TouchableOpacity>

                  {
                  isClickedveggie ? 
                  <View style={{position:'absolute',zIndex:1,width:'50%',height:90,backgroundColor:'#B1BEC1',borderRadius:10,bottom:5,right:20}}>
              
                 <FlatList  data={data3}                       
                 renderItem={({item,index}) => {
                  return(
                    <TouchableOpacity style={{margin:10}} onPress={()=>{
                      setSelectedVeggie(item.name);
                      setIsClickedVeggie(false);
                    }}>
                      <Text style={{color:'#000',fontWeight:'500'}} >{item.name}</Text>
                    </TouchableOpacity>
                  )
                 }}
                 />
                  </View> : null
                }

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSend()}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        alignSelf: "center",
                        fontSize: 16,
                      }}
                    >
                      Search
                    </Text>
                  </TouchableOpacity>
                  {loading ? (
                    <ActivityIndicator size={"large"} color={"#2E9EC8"} />
                  ) : null}
                </View>
              {/* )} */}
            </View>
          </View>
        </Modal>

      

         <ScrollView style={{backgroundColor:'#B6D9F7',height:500,width:'90%',alignSelf:'center',borderRadius:10,marginTop:30}}> 
                  <Text style={{ fontSize: 16 ,margin:10,color:'#000'}}>{data}</Text> 

               


                 </ScrollView>

    </Animatable.View>
  );
};

export default Dietplan;

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    alignSelf: "center",
    color: "#000",
    borderRadius: 20,
    borderColor: "lightgrey",
    width: "90%",
    paddingLeft: 10,
    height: 45,
    marginBottom: 20,
  },
  bot: {
    fontSize: 16,
    width: "80%",
    color: "#FFF",
    marginLeft: 8,
  },
  button: {
    backgroundColor: "#2E9EC8",
    padding: 10,
    borderRadius: 15,
    width: "35%",
    marginBottom: 20,
    alignSelf: "center",
  },
 

  
  centeredView: {
    // flex: 1,
    justifyContent: "flex-end",

    marginTop: 150,
  },
  modalView: {
    height: 500,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
 
  bot: {
    fontSize: 16,
    width: "80%",
    color: "#FFF",
    marginLeft: 8,
  },
});
