import { StyleSheet, Text, View ,
    FlatList,
    Image,
    ScrollView,
    TextInput,
    ActivityIndicator,
    TouchableOpacity,
    KeyboardAvoidingView,
   
    Modal,} from 'react-native'
import React,{useState,useEffect,useRef} from 'react'
import axios from "axios";
import Lottie from 'lottie-react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
const Textinputcomponent = () => {
    const [data, setData] = useState([]);
    const apikey = "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";
    const apiUrl = "https://api.openai.com/v1/completions";
    const [name,setName] = useState('');
    const [gender,setGender] = useState(''); 
    const [isclickedGender,setIsClickedGender] = useState(''); 
    const [dateTextinput,setDateTextinput] = useState('');
    const [timeTextinput,setTimeTextinput] = useState('');
    const [place ,SetPlace] = useState('');
    const [date,setDate] = useState(new Date());
    const [mode,setMode] = useState('date');
    const [show,setShow] = useState(false);
    const [text,setText] = useState('empty');
    const [text2,setText2] = useState('empty');
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const animationRef = useRef<Lottie>(null)

useEffect(() => {
    animationRef.current?.play()

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play(30, 120);
  }, [])




    const data2 = [
        {
          name :'Male'
        },
        {
          name :'Female'
        }
      ]

      const onChange = (event,selectedDate)=> {
        const currentDate = selectedDate || date;
        setShow();
        setDate(currentDate)
        
        let tempDate = new Date (currentDate)
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/'+ tempDate.getFullYear();
        
        let fTime =  tempDate.getHours()  + '/' + tempDate.getMinutes() ;
        setText(fDate )
        setText2(fTime)
        }
        
        
        
          const showmode = (currentmode)=> {
           setMode(currentmode);
           setShow(true)
          }
        
          const handleSend = async () => { 
            setLoading(true);
            setShowModal(!showModal);
            try {
              const prompt =  `What is the birth kundli of ${name} who's gender is ${gender} and the date and time  is ${dateTextinput} ${timeTextinput} whos's birth place is ${place} in briefly  minimum 1000 words `
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
               setGender('');
              setDateTextinput('');
              setTimeTextinput('');
              setName('');
              SetPlace('');
            } catch (e) {
              console.log("its an error", e);
            }
          };




  return (
    <View>
       <TextInput 
      value={name}
      onChangeText={(text)=> setName(text)}
      style={styles.textinput}
      placeholder='Enter the Name...'
      placeholderTextColor='lightgrey'
      />

<TouchableOpacity

onPress={()=> {
  setIsClickedGender(!isclickedGender)
}}
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        borderWidth: 1,
                        alignSelf:'center',
                        
                        borderRadius: 30,
                        borderColor: "#f0592b",
                        width: "80%",
                        paddingLeft: 10,
                         height:50,
                       marginTop:10,
  
                        marginBottom: 20,
                      }}
                    >
                      <TextInput
                        value={gender}
                        onChangeText={(text) => setGender(text)}
                         style={{color: "lightgrey"}}
                        placeholder="Enter the Gender..."
                        placeholderTextColor='lightgrey'
                      />
                      
                      {
                      isclickedGender ? (
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
                    isclickedGender ? 
                    <View style={{position:'absolute',zIndex:1,width:'40%',height:90,backgroundColor:'#fff',borderRadius:10,bottom:19,paddingRight:10,top:140,right:30}}>
  
                   <FlatList  data={data2}
                   renderItem={({item,index}) => {
                    return(
                      <TouchableOpacity style={{margin:10}} onPress={()=>{
                        setGender(item.name);
                        setIsClickedGender(false);
                      }}>
                        <Text style={{color:'#000',fontWeight:'500'}} >{item.name}</Text>
                      </TouchableOpacity>
                    )
                   }}
                   />
                    </View> : null
                  }

<TextInput 
      value={place}
      onChangeText={(text)=> SetPlace(text)}
      style={styles.textinput2}
      placeholder='Enter the birth place ...'
      placeholderTextColor='lightgrey'
      />

<TouchableOpacity
   onPress={()=>{ showmode('date'),setDateTextinput(text)}}               
   style={{   
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderWidth: 1,
                      alignSelf:'center',
                      color: "#fff",
                      borderRadius: 30,
                      borderColor: "#f0592b",
                      width: "80%",
                      paddingLeft: 10,
                       height: 50,
                     alignItems:'center',
                      marginTop:15,
                      marginBottom: 20,
                    }}
                  >
                    <TextInput
                      value={dateTextinput}
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
    // minimumDate={new Date(2023, 2, 24)}
    />
  )
}

</TouchableOpacity>




                        </TouchableOpacity>



                        <TouchableOpacity
   onPress={()=>{ showmode('time'),setTimeTextinput(text2)}}               
   style={{   
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderWidth: 1,
                      alignSelf:'center',
                      color: "#fff",
                      borderRadius: 30,
                      borderColor: "#f0592b",
                      width: "80%",
                      paddingLeft: 10,
                       height: 50,
                     alignItems:'center',
                      marginTop:15,
                      marginBottom: 20,
                    }}
                  >
                    <TextInput
                      value={timeTextinput}
                      onChangeText={(text) => setTimeTextinput(text)}
                       style={{color:'lightgrey'}}
                      placeholder="Enter time ..."
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
    // minimumDate={new Date(2023, 2, 24)}
    
    />
  )
}

</TouchableOpacity>




                        </TouchableOpacity>

                        <TouchableOpacity style={{alignSelf:'center'}} onPress={() => handleSend()}>
                        <Lottie source={require('../assets/Images/button.json')}
       useRef={animationRef}
        autoPlay={true}
        style={{height:50,width:50}}
        loop={true}
        />
      </TouchableOpacity>

    <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
        
          <View style={styles.modalView}>
           
          <TouchableOpacity
                style={{
                
                  alignSelf: "flex-end",
                  justifyContent:'center',
                  alignItems:'center'
                }}
                onPress={() => {
                  setShowModal(!showModal);
                }}
              >
                <Image source={require("../assets/Images/xcircle.png")}
                style={{tintColor:'#fff'}}
                 />
              </TouchableOpacity>
             
               {loading ? (
        <ActivityIndicator size="large" color="#f04e1d" />
      ) : (
        <ScrollView
          style={{
            // borderColor: "#10a37f",
            // borderWidth: 1,
           margin:5,
           
            borderRadius: 10,
          }}
        >
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
         <Lottie source={require('../assets/Images/ballon2.json')}
       useRef={animationRef}
        autoPlay={true}
        style={{height:80,width:100}}
        loop={true}
        />
        <Lottie source={require('../assets/Images/ballon.json')}
       useRef={animationRef}
        autoPlay={true}
        style={{height:80,width:100}}
        loop={true}
        />
        </View>
          <Text style={styles.result}>{data}</Text>
        </ScrollView>
      )} 
          </View>
        </Modal>




    </View>
  )
}

export default Textinputcomponent

const styles = StyleSheet.create({
    textinput: {
        borderWidth: 1,
        alignSelf:'center',
        color: "lightgrey",
        borderRadius: 30,
        borderColor: "#f0592b",
        width: "80%",
        paddingLeft: 10,
         height: 50,
      marginBottom:20,
          marginTop: 20,
      },
      textinput2: {
        borderWidth: 1,
        alignSelf:'center',
        color: "lightgrey",
        borderRadius: 30,
        borderColor: "#f0592b",
        width: "80%",
        paddingLeft: 10,
         height: 50,
      marginBottom:20,
          marginTop: 10,
      },
      button: {
        backgroundColor: "#f04e1d",
        padding: 10,
        borderRadius: 25,
        width: "30%",
        marginBottom: 10,
        marginTop:10,
        alignSelf:'center'
        
      }, 
      modalView: {
        margin: 20,
        height:700,
        backgroundColor: '#000',
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
      result:{
        color:'#fff',
        fontSize:16,
        bottom:20
      }
})