import { StyleSheet, Text, View,TouchableOpacity,Modal,Image,TextInput } from 'react-native'
import React,{useState} from 'react'
// import SQLite from 'react-native-sqlite-storage'

// const db = SQLite.openDatabase (
//    {
//      name : 'mainDB' ,
//      location : 'default'

//    },
//    () => { },
//    error => { console.log(error)}
// )

const Animationscreen = () => {

   const [modalVisible, setModalVisible] = useState(false);
   const [name, setName]  = useState();
   const [age, setAge]  = useState();
   
   //  const createTable = () => {

   //  }




  return (
    <View style={{flex:1,alignItems:'center'}}>
      <TouchableOpacity style={{backgroundColor:'#000',padding:10,margin:10}}
      onPress={() => setModalVisible(true)}>
      
      <Text style={{color:'#fff'}}>Add Data</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
                style={{
                  height: 10,
                  width: 10,
                  alignSelf: "flex-end",
                  // justifyContent:'center',
                  // alignItems:'center'
                }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Image source={require("../assets/Images/xcircle.png")} />
              </TouchableOpacity>



              <TextInput
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.textinput}
                    placeholder="Enter name..."
                  />
                  <TextInput
                    value={age}
                    onChangeText={(text) => setAge(text)}
                    style={styles.textinput}
                    placeholder="Enter age..."
                  />


<TouchableOpacity style={{backgroundColor:'#000',padding:10,margin:10,borderRadius:15}}>
      
      
      <Text style={{color:'#fff'}}>Insert Data</Text>
      </TouchableOpacity>
           
                      </View>
        </View>
      </Modal>


      
    </View>
  )
}

export default Animationscreen

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      // justifyContent: 'center',
      alignItems: 'center',
       marginTop: 40,
    },
    modalView: {
      margin: 20,
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
      height:250,
      width:'80%'
    },
    textinput: {
      borderWidth: 1,
      alignSelf: "center",
      color: "#000",
      borderRadius: 20,
      borderColor: "lightgrey",
      width: "100%",
      paddingLeft: 10,
      height: 45,
      marginTop:20
    },
})