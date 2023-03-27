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
  import * as Animatable from "react-native-animatable";
  import Lottie from 'lottie-react-native';
  const Resumewriting = ({ navigation }) => {
    const [data, setData] = useState();
    const apikey = "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";
    const apiUrl = "https://api.openai.com/v1/completions";
    // const [textinput, setTextInput] = useState("");
    // const [gender, setGender] = useState("");
    const [Name, setName] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const animationRef = useRef<Lottie>(null)
    const [Experience, setExperience] = useState("");
    const [Study, setStudy] = useState("");
    const [Department, setDepartment] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selectedveggie, setSelectedVeggie] = useState(); 
    const [isClickedveggie,setIsClickedVeggie] = useState(false);
    const [selectedValue,setSelectedValue] =  useState();
  
    
    
    const data3 = [
      {
        name :'Male'
      },
      {
        name :'Female'
      }
    ]
  
  
  
    const handleSend = async () => {
      setLoading(true);
      
      try {
        const prompt = `write a resume for ${Name} whos gender is ${selectedveggie} and the home address is  ${Address} completed qualification in  ${Study} having experince of ${Experience} in the department of ${Department} whos contact number is ${Phone} and the email address is ${Email} ?`      
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
         setName("");
        setAddress("");
       
        setEmail("");
        setPhone("");
        setExperience("");
        setStudy("");
        setSelectedVeggie('');
       
        setDepartment("");
        setLoading(false);
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
            Resume Writing
          </Text>
        </TouchableOpacity>
        <Text style={{ marginLeft: 50 }}>With dwellfox</Text>
  
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            // alignItems: "center",
            marginTop:10
          }}
        >

{/* <Lottie source={require('../assets/Images/resumelottie2.json')}
     useRef={animationRef}
      autoPlay={true}
      style={{height:60,width:60,marginLeft:5}}
      loop={true}
      /> */}
      
          <Image source={require('../assets/Images/Resumewriting.png')} style={{height:50,width:50,resizeMode:'contain',borderRadius:25,marginLeft:20}}/> 
  
          <Text
            style={{
              color: "#2E9EC8",
              fontWeight: "500",
              margin: 20,
              marginLeft: 40,
            }}
          >
            Write a Resume On
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
                   <ScrollView>
                    <Text style={{ fontSize: 16,margin:10 ,color:'#000'}}>{data}</Text> 
  
                 
  
  
                   </ScrollView>
  
  
  
  
                ) : ( */}
                  <ScrollView style={{width:'100%'}}>
                    
  
                  
                  <Text style={{color:'#000',fontSize:16,alignSelf:'center'}}>Choose following criteria given below</Text>
                      
                      <Text style={{color:'#000',fontSize:14,alignSelf:'center',margin:10,marginBottom:10}}>For Best Result</Text>
  
                    <TextInput
                      value={Name}
                      onChangeText={(text) => setName(text)}
                      style={styles.textinput}
                      placeholder="Enter Your Name..."
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
                         
                        borderRadius: 15,
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
                        placeholder="Enter the Gender..."
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
                    <View style={{width:'60%',height:70,backgroundColor:'#EFF9F9',borderRadius:10,bottom:19,alignItems:'flex-end',paddingRight:10,alignSelf:'flex-end',marginRight:20}}>
  
                   <FlatList  data={data3}
                   renderItem={({item,index}) => {
                    return(
                      <TouchableOpacity style={{margin:10}} onPress={()=>{
                        setSelectedVeggie(item.name);
                        setIsClickedVeggie(false);
                      }}>
                        <Text style={{color:'#384B55',fontWeight:'500'}} >{item.name}</Text>
                      </TouchableOpacity>
                    )
                   }}
                   />
                    </View> : null
                  }
  

                    <TextInput
                      value={Address}
                      onChangeText={(text) => setAddress(text)}
                      style={styles.textinput}
                      placeholder="Enter Your Address..."
                    />
                    <TextInput
                      value={Email}
                      onChangeText={(text) => setEmail(text)}
                      style={styles.textinput}
                      placeholder="Enter Your Email..."
                    />
                    <TextInput
                      
                      value={Phone}
                      onChangeText={(text) => setPhone(text)}
                      style={styles.textinput}
                      placeholder="Enter Your Phone No..."
                    />

                    <TextInput
                      
                      value={Experience}
                      onChangeText={(text) => setExperience(text)}
                      style={styles.textinput}
                      placeholder="Enter Your Experience..."
                    />
                        
<TextInput
                      
                      value={Study}
                      onChangeText={(text) => setStudy(text)}
                      style={styles.textinput}
                      placeholder="Enter Your Higher Qualification..."
                    />

<TextInput
                      
                      value={Department}
                      onChangeText={(text) => setDepartment(text)}
                      style={styles.textinput}
                      placeholder="Experience , In Which Department..."
                    />



                    
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
                  </ScrollView>
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
  
  export default Resumewriting;
  
  const styles = StyleSheet.create({
    textinput: {
      borderWidth: 1,
      alignSelf: "center",
      color: "#000",
      borderRadius: 20,
      borderColor:'lightgrey',
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
    //    flex: 1,
    //   justifyContent: "flex-end",
  
       marginTop: 70,
    },
    modalView: {
      height: 650,
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
  