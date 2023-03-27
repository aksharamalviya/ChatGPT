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
  import Lottie from 'lottie-react-native';
  import { Calendar } from 'react-native-calendars'
  import DateTimePicker from '@react-native-community/datetimepicker'
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import * as Animatable from "react-native-animatable";
import Calender from "../components/Calender";



  const Horoscope = ({navigation,props}) => {
  
    const [data, setData] = useState([]);
    const apikey = "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";
    const apiUrl = "https://api.openai.com/v1/completions";
    const [textinput, setTextInput] = useState("");
    const [Sign,setSign] = useState('');
    const [isClickedSign,setIsClickedSign] = useState('');
    const [datetextinput,setDateTextinput] = useState('');
    
    const [loading, setLoading] = useState(false);
    const [isRefresh, setisRefresh] = useState(false);
    const animationRef = useRef<Lottie>(null)
     
    const [date,setDate] = useState(new Date());
    const [mode,setMode] = useState('date');
    const [show,setShow] = useState(false);
    const [text,setText] = useState('empty');
    
    useEffect(() => {
      animationRef.current?.play()
  
      // Or set a specific startFrame and endFrame with:
      animationRef.current?.play(30, 120);
    }, [])
  
  const data2 = [
    {
      List : ' Aries'
    },
    {
      List :'Taurus'
    },
    {
        List :'Gemini'
      },
      {
        List :'Cancer'
      },
      {
        List :'Leo'
      },
      {
        List :'Virgo'
      },
      {
        List :'Libra'
      },
      {
        List :'Scorpio'
      },
      {
        List :'Sagittarius'
      },
      {
        List :'Capricon'
      },
      {
        List :'Aquarius'
      },
      {
        List :'Pisces'
      },
  ];


  const onChange = (event,selectedDate)=> {
    const currentDate = selectedDate || date;
    setShow();
    setDate(currentDate)
    
    let tempDate = new Date (currentDate)
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/'+ tempDate.getFullYear();
    
    let fTime = 'Hours : ' + tempDate.getHours() + '| minutes : '+ tempDate.getMinutes();
    setText(fDate )
    }
    
    
    
      const showmode = (currentmode)=> {
       setMode(currentmode);
       setShow(true)
      }
    
  
  const handlesend2 = async () => {
    setisRefresh(true)
    try {
      const value = await AsyncStorage.getItem("gfg");
      const prompt = value;
      try {
        if (value !== null) {
          // setData(value)

          console.log("myvaluekyah", value);
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

          console.log("cjdnvjdvn", text);
          setData(text);
          setisRefresh(false)
        }
      } catch (e) {
        setisRefresh(false)
        console.error(e);
      }
    } catch (e) {
      setisRefresh(false)
      console.log("its an error", e);
    }
  };


    const handleSend = async () => { 
        setLoading(true);
        try {
          const prompt =  `What is the horoscope of ${Sign} about the topic ${textinput} of date ${date} in 1000 words ?`
          //  `${txt1}${txt2}`
          //  "write content on "+textinput+"on topic of"+textinput
    
          try {
            await AsyncStorage.setItem("gfg", prompt);
          } catch (e) {
            console.error(e);
          }

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
          setDateTextinput('');
          setSign('');
        } catch (e) {
          console.log("its an error", e);
        }
      };
  
  return (
    
    <View style={{flex:1,backgroundColor:'#000'}}>
      <TouchableOpacity style={{flexDirection:'row',margin:10,marginTop:8}}
      onPress={()=> navigation.goBack()}
      >
        <Image source={require('../assets/Images/backarrow.png')} style={{height:20,width:20,resizeMode:'contain',tintColor:'#FFF'}}/>
      <Text style={{marginLeft:35,fontSize:20,color:'#DD8232',fontWeight:'500'}}>Horoscope</Text>
    </TouchableOpacity>
  
    <View style={{alignSelf:'flex-start',flexDirection:'row'}}>
        {/* <Image source={require('../assets/Images/contentwriting.png')} style={{height:50,width:50,resizeMode:'contain',borderRadius:25,marginLeft:10}}/> */}
  
        <Lottie source={require('../assets/Images/horoscope.json')}
       useRef={animationRef}
        autoPlay={true}
        style={{height:70,width:70}}
        loop={true}
        />
        <View>
      <Text style={{color:'#fff'}}>With dwellfox</Text>
     <View style={{marginTop:10,backgroundColor:'#F9B463',borderRadius:10,paddingLeft:7,padding:2}}>
      <Text style={{}}> Find your Horoscope Detail</Text>
      
     </View>

     

     </View>
     <Lottie source={require('../assets/Images/star.json')}
       useRef={animationRef}
        autoPlay={true}
        style={{height:70,width:70}}
        loop={true}
        />
    </View>
    
  
    <TextInput 
      value={textinput}
      onChangeText={(text)=> setTextInput(text)}
      style={styles.textinput}
      placeholder='Enter the topic...'
      placeholderTextColor='lightgrey'
      />
      <TouchableOpacity
                  onPress={()=> {
                    setIsClickedSign(!isClickedSign)
                  }}

                   

                    style={{   
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderWidth: 1,
                      alignSelf:'center',
                      color: "#fff",
                      borderRadius: 30,
                      borderColor: "#DD8232",
                      width: "80%",
                      paddingLeft: 10,
                       height: 45,
                     marginTop:10,

                      marginBottom: 10,
                    }}
                  >
                    <TextInput
                      value={Sign}
                      onChangeText={(text) => setSign(text)}
                       style={{color:'lightgrey'}}
                      placeholder="Your Zodiac Sign..."
                      placeholderTextColor='lightgrey'
                    />
                       

                       {
                      isClickedSign ? (
                         <Image
                        source={require("../assets/Images/dropup.png")}
                        style={{ height: 30, width: 30, marginRight: 10,tintColor:'#fff',alignSelf:'center' }}
                      /> 
                      ) :(
                         <Image
                        source={require("../assets/Images/dropdown.png")}
                        style={{ height: 18, width: 18, marginRight: 10,alignSelf:'center',tintColor:'#fff'}}
                      /> 
                      )
                    }
                     
            
                    
                  </TouchableOpacity>         

                {              
                  isClickedSign ? 
                  <View style={{position:'absolute',zIndex:1,width:'40%',backgroundColor:'#fff',borderRadius:10,bottom:19,top:230,right:10}}>

                 <FlatList  data={data2}
                 renderItem={({item,index}) => {
                  return(
                    <TouchableOpacity style={{margin:10}} onPress={()=>{
                      setSign(item.List);
                      setIsClickedSign(false);
                    }}>
                      <Text style={{color:'#000',fontWeight:'500'}} >{item.List}</Text>
                    </TouchableOpacity>
                  )
                 }}
                 />
                  </View> : null
                }


<TouchableOpacity
   onPress={()=>{ showmode('date'),setDateTextinput(text)}}               
   style={{   
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderWidth: 1,
                      alignSelf:'center',
                      color: "#fff",
                      borderRadius: 30,
                      borderColor: "#DD8232",
                      width: "80%",
                      paddingLeft: 10,
                       height: 45,
                     alignItems:'center',
                      
                      marginBottom: 10,
                    }}
                  >
                    <TextInput
                      value={datetextinput}
                      onChangeText={(text) => setDateTextinput(text)}
                       style={{color:'lightgrey'}}
                      placeholder="Enter Date..."
                      placeholderTextColor='lightgrey'
                    />
                    <TouchableOpacity >
                       <Image
                        source={require("../assets/Images/dropdown.png")}
                        style={{ height: 18, width: 18,alignSelf:'center',tintColor:'#fff',marginRight:10}}
                      />
  
                      
{
  show && (
    <DateTimePicker
    testID='DateTimePicker'
    value={date}
    mode={mode}
    is24Hour={true}
    display='default'
    onChange={onChange}
    minimumDate={new Date(2023, 2, 24)}
    />
  )
}

</TouchableOpacity>




                        </TouchableOpacity>         
  
  
  <TouchableOpacity style={styles.button} onPress={() => handleSend()}>
        <Text style={{ color: "#fff", alignSelf: "center", fontSize: 16 }}>
          Search
        </Text>
      </TouchableOpacity>
  
      {loading ? (
        <ActivityIndicator size="large" color="orange" />
      ) : (
        <ScrollView
          style={{
            marginHorizontal: 10,
            padding: 5,
            borderRadius: 10,
            backgroundColor: "#F9B463",
            // height: 800,
          }}
        >
           {data.length != 0 ? (  
            <TouchableOpacity onPress={() => handlesend2()}> 
              <Image
                source={require("../assets/Images/refresh.png")}
                style={{ height: 15, width: 15 }}
              />
            </TouchableOpacity>
          ) : null}              
          {
            isRefresh ?
            <ActivityIndicator  size={'large' } color={'#4A7EF3'}/>:null
          }   

          <Text style={{ width: "95%", fontSize: 16 }}>{data}</Text>
        </ScrollView>
      )}
    </View>
   
  )
  }
  
  export default Horoscope;
  
  const styles = StyleSheet.create({
    textinput: {
        borderWidth: 1,
        alignSelf:'center',
        color: "lightgrey",
        borderRadius: 30,
        borderColor: "#DD8232",
        width: "80%",
        paddingLeft: 10,
         height: 45,
      
          marginTop: 5,
      },
      bot: {
        fontSize: 16,
        width: "80%",
        color: "#FFF",
        marginLeft: 8,
      },
      button: {
        backgroundColor: "#DD8232",
        padding: 10,
        borderRadius: 25,
        width: "30%",
        marginBottom: 10,
        
        alignSelf:'center'
        
      },
      centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    
      },
      modalView: {
        margin: 20,
        marginTop:170,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
  })