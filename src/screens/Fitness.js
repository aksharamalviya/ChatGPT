import {
    FlatList,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    View,
    RefreshControl,
    Modal,
    ScrollView,
    ActivityIndicator,
  } from "react-native";
  import React, { useEffect, useState,useRef } from "react";
  import axios from "axios";
  import Lottie from 'lottie-react-native';
  import * as Animatable from "react-native-animatable";

const Fitness = ({navigation}) => {

    const [data, setData] = useState();
    const apikey = "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";
    const apiUrl = "https://api.openai.com/v1/completions";
    const [modalVisible, setModalVisible] = useState(false);
   
    const [loading, setLoading] = useState();
    const [Age, setAge] = useState();
    const [Idolweight, setIdolweight] = useState();
    
    const [Height, setHeight] = useState();
    
    const [selectedValue, setSelectedValue] = useState();
  const [selectedgoal, setSelectedgoal] = useState();
  const [selecttype,setSelectedType] = useState(); 
  const [isClickedgoal,setIsClickedgoal] = useState(false);
  const [isClickedtype,setIsClickedType] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const [refreshing, setRefreshing] =useState(false);
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
          name :'Legs'
        },
        {
          name :'Hands'
        },
        {
            name :'Belly'
     },
     {
        name :'Thigh'
 },
      ]


  const data4 = [
    {
        name :'Loose Weight'
    },
    {
        name :'Gain Weight'
    },
  ]

 const onRefresh = () => {
    setData();
    handleSend();
 };


  const handleSend = async () => {
    
    setLoading(true);
    
    try {
      const prompt = `Suggest Best home Exercise plan  for   ${selecttype} who wants exercise for ${selectedgoal} who is ${selectedValue} and the  age is  ${Age} who is  having  weight is  ${Idolweight} and height ${Height}  in best  10  points  ? `;
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
      setRefreshing();
      setLoading(false);
      setModalVisible(false);
      setSelectedValue("");
      setAge("");
      setIdolweight("");
      setHeight("");
      setSelectedType("");
      setSelectedgoal("");
      setIsClickedType("");
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
         
          <Text
            style={{
              marginLeft: 20,
              fontSize: 18,
              color: "#43B476",
              fontWeight: "500",
            }}
          >
          Fitness World
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


      
      <Lottie source={require('../assets/Images/fitness.json')}
     useRef={animationRef}
      autoPlay={true}
      style={{height:70,width:70}}
      loop={true}
      />
       
  
          <Text
            style={{
              color: "#12C688",
              fontWeight: "500",
              fontSize:15,
              margin: 20,
              marginLeft: 20,
            }}
          >
            Search Fitness Exercise
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Image
              source={require("../assets/Images/plus.png")}
              style={{
                height: 30,
                width: 30,
                marginLeft:30,
                tintColor: "#12C688",
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

              <ScrollView style={{width:'100%'}}>

              <Text style={{color:'#000',fontSize:16,alignSelf:'center'}}>Choose following criteria given below</Text>    
              <Text style={{color:'#000',fontSize:14,alignSelf:'center',margin:10,marginBottom:10}}>For Best Result</Text> 
   
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
                      height: 50,
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
                  <View style={{width:'60%',height:70,backgroundColor:'#EFF9F9',borderRadius:10,bottom:19,alignItems:'flex-end',paddingRight:10,alignSelf:'flex-end',marginRight:20}}>

                 <FlatList  data={data2}
                 renderItem={({item,index}) => {
                  return(
                    <TouchableOpacity style={{margin:10}} onPress={()=>{
                      setSelectedValue(item.List);
                      setIsClicked(false);
                    }}>
                      <Text style={{color:'#384B55',fontWeight:'500'}} >{item.List}</Text>
                    </TouchableOpacity>
                  )
                 }}
                 />
                  </View> : null
                }

                  

                  <TextInput
                    value={Age}
                    onChangeText={(text) => setAge(text)}
                    style={styles.textinput}
                    placeholder="Enter Your Age..."
                  />
                  <TextInput
                    value={Idolweight}
                    onChangeText={(text) => setIdolweight(text)}
                    style={styles.textinput}
                    placeholder="Enter Your Idol Weight..."
                  />
                   <TextInput
                    value={Height}
                    onChangeText={(text) => setHeight(text)}
                    style={styles.textinput}
                    placeholder="Enter Your Height..."
                  />
                  
                  <TouchableOpacity

onPress={()=> {
  setIsClickedgoal(!isClickedgoal)
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
                      height: 50,
                      alignItems: "center",

                      marginBottom: 20,
                    }}
                  >
                    <TextInput
                      value={selectedgoal}
                      onChangeText={(text) => setSelectedgoal(text)}
                      // style={styles.textinput5}
                      placeholder="Whats Your Focus Part..."
                    />
                   
                    
                    {
                      isClickedgoal ? (
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
                  isClickedgoal ? 
                  <View style={{width:'70%',height:120,backgroundColor:'#DCF1F8',alignSelf:'flex-end',borderRadius:10,bottom:19,marginRight:20}}>

                 <FlatList  data={data3}
                 renderItem={({item,index}) => {
                  return(
                    <TouchableOpacity style={{margin:4}} onPress={()=>{
                      setSelectedgoal(item.name);
                      setIsClickedgoal(false);
                    }}>
                      <Text style={{color:'#384B55',fontWeight:'500'}} >{item.name}</Text>
                    </TouchableOpacity>
                  )
                 }}
                 />
                  </View> : null
                }

<TouchableOpacity

onPress={()=> {
  setIsClickedType(!isClickedtype)
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
                      height: 50,
                      alignItems: "center",

                      marginBottom: 20,
                    }}
                  >
                    <TextInput
                      value={selecttype}
                      onChangeText={(text) => setSelectedType(text)}
                      // style={styles.textinput5}
                      placeholder="Whats Your goal..."
                    />
                   
                    
                    {
                      isClickedtype ? (
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
                  isClickedtype ? 
                  <View style={{width:'70%',height:90,backgroundColor:'#DCF1F8',alignSelf:'flex-end',borderRadius:10,bottom:19,marginRight:20}}>

                 <FlatList  data={data4}
                 renderItem={({item,index}) => {
                  return(
                    <TouchableOpacity style={{margin:8}} onPress={()=>{
                      setSelectedType(item.name);
                      setIsClickedType(false);
                    }}>
                      <Text style={{color:'#384B55',fontWeight:'500'}} >{item.name}</Text>
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
                    <ActivityIndicator size={"large"} color={"#89D5AB"} />
                  ) : null}
                </View>
              

              </ScrollView>
            </View>
          </View>


              
                
        </Modal>

        {refreshing ? (
                    <ActivityIndicator size={"large"} color={"#89D5AB"} />
                  ) : null}

   
     {
        data ? (
            <ScrollView style={{backgroundColor:'#89D5AB',height:500,width:'90%',alignSelf:'center',borderRadius:10,marginTop:30}}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
          
            >
            
                      <Text style={{ fontSize: 16 ,margin:10,color:'#000'}}>{data}</Text> 
    
                      
   
    
    
                     </ScrollView>
       
        ) : (
            <View style={{backgroundColor:'#89D5AB',height:500,width:'90%',alignSelf:'center',borderRadius:10,marginTop:30}}>

            </View>
        )
     }
   
  

        
    </Animatable.View>
  )
}

export default Fitness

const styles = StyleSheet.create({
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
      button: {
        backgroundColor: "#89D5AB",
        padding: 10,
        borderRadius: 15,
        width: "35%",
        marginBottom: 20,
        alignSelf: "center",
      },
})