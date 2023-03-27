import {
    FlatList,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    View,
    ScrollView,
    ActivityIndicator,
  } from "react-native";
  import React, { useEffect, useState,useRef } from "react";
  import axios from "axios";
  import Lottie from 'lottie-react-native';
  import * as Animatable from "react-native-animatable";
  const Businessfifth = ({navigation}) => {
  
    const [data, setData] = useState([]);
    const apikey = "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";
    const apiUrl = "https://api.openai.com/v1/completions";
    const [textinput, setTextInput] = useState("");
    const [loading, setLoading] = useState(false);

    const animationRef = useRef<Lottie>(null)
  
  useEffect(() => {
    animationRef.current?.play()

    
    animationRef.current?.play(30, 120);
  }, [])

  
    const handleSend = async () => { 
        setLoading(true);
        try {
          const prompt =  `write business Growth idea for ${textinput} in 1000 words ?`
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
          console.log('cjdnvjdvn',text)
            setData(text);
          setLoading(false);
           setTextInput('');
          setLoading(false);
        } catch (e) {
          console.log("its an error", e);
        }
      };
  
  return (
    <Animatable.View
    animation="slideInUp" iterationCount={3} direction="alternate">
      <TouchableOpacity style={{flexDirection:'row',margin:10,marginTop:20}}
      onPress={()=> navigation.goBack()}
      >
        <Image source={require('../assets/Images/backarrow.png')} style={{height:20,width:20,resizeMode:'contain'}}/>
      <Text style={{marginLeft:35,fontSize:20,color:'#DE66F4',fontWeight:'500'}}>Business Growth</Text>
    </TouchableOpacity>
  
    <View style={{alignSelf:'flex-start',flexDirection:'row'}}>
      {/* <Image source={require('../assets/Images/contentwriting.png')} style={{height:50,width:50,resizeMode:'contain',borderRadius:25,marginLeft:10}}/> */}

      <Lottie source={require('../assets/Images/bussinesslottie.json')}
     useRef={animationRef}
      autoPlay={true}
      style={{height:60,width:60}}
      loop={true}
      />
      <View>
      <Text style={{marginLeft:10}}>With dwellfox</Text>
     <View style={{marginLeft:10,marginTop:10,backgroundColor:'#EEC3F6',borderRadius:10,paddingLeft:7,padding:2}}>
      <Text style={{}}>Create Business idea On just anything !</Text>
     </View>
     </View>
    </View>
    
  
    <TextInput 
      value={textinput}
      onChangeText={(text)=> setTextInput(text)}
      style={styles.textinput}
      placeholder='Enter Your Business Name...'
      />
  
  <TouchableOpacity style={styles.button} onPress={() => handleSend()}>
        <Text style={{ color: "#fff", alignSelf: "center", fontSize: 16 }}>
          Search
        </Text>
      </TouchableOpacity>
  
      {
      loading ? <ActivityIndicator size='large' color='#2A65DB'/>
      :
      
      <ScrollView style={{marginHorizontal:10,padding:8,borderRadius:10,backgroundColor:'#EEC3F6',height:400}}>
        <TouchableOpacity onPress={()=> handleSend()}>
          <Image source={require('../assets/Images/refresh.png')} style={{height:15,width:15}}/>
        </TouchableOpacity>
      <Text style={{width:'95%',fontSize:16}}>{data}</Text>
      </ScrollView>
      
    }
    </Animatable.View>
  )
  }
  
  export default Businessfifth
  
  const styles = StyleSheet.create({
    textinput: {
        borderWidth: 1,
        alignSelf:'center',
        color: "#000",
        borderRadius: 30,
        borderColor: "#DE66F4",
        width: "80%",
        paddingLeft: 10,
        // height: 50,
       marginBottom:20,
          marginTop: 30,
      },
      bot: {
        fontSize: 16,
        width: "80%",
        color: "#FFF",
        marginLeft: 8,
      },
      button: {
        backgroundColor: "#DE66F4",
        padding: 10,
        borderRadius: 25,
        width: "30%",
        marginBottom: 20,
        alignSelf:'center'
        
      },
  })