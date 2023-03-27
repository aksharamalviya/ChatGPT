
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  
  ScrollView,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
//  import SQLite from 'react-native-sqlite-storage'
 import { openDatabase } from "react-native-sqlite-storage";




let db = openDatabase({name: 'UserDatabase.db'});

const Chatting = ({ navigation }) => {
  const [data, setData] = useState([]);
  const apikey = "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";
  const apiUrl = "https://api.openai.com/v1/completions";
  const [textinput, setTextInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
   const [name, setName]  = useState();
   const [address, setAddress]  = useState();
   
  const [loading, setLoading] = useState(false);

 






// const saveUser = () => {
//   console.log('name and address',name,address);
//   db.transaction(function (tx) {
//     tx.executeSql(
//       'INSERT INTO table_user (name, address) VALUES (?,?)',
//       [name, address],
//       (tx, results) => {
//         console.log('Results', results.rowsAffected);
//         if (results.rowsAffected > 0) {
//           Alert.alert(
//             'Success',
//             'You are Registered Successfully',
//             [
//               {
//                 text: 'Ok',
//                 onPress: () => navigation.navigate('Profile'),
//               },
//             ],
//             {cancelable: false},
//           );
//         } else Alert.alert('Registration Failed');
//       },
//       error => {
//         console.log(error);
//       },
//     );
//   });
// };

// useEffect(() => {
//   db.transaction(txn => {
//     txn.executeSql(
//       "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
//       [],
//       (tx, res) => {
//         console.log('item:', res.rows.length);
//         if (res.rows.length == 0) {
//           txn.executeSql('DROP TABLE IF EXISTS table_user', []);
//           txn.executeSql(
//             'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20), address VARCHAR(100))',
//             [],
//           );
//         }
//       },
//       error => {
//         console.log(error);
//       },
//     );
//   });
// }, []);

 
  const handleSend = async () => {
    // setLoading(true);
    try {
      const prompt = textinput;

      setData([
        // ...data,
        { type: "user", text: prompt },
        { type: "bot", text: "Typing...." },
      ]);

      const response = await axios.post(
        apiUrl,
        {
          model: "text-davinci-003",
          prompt: prompt,
          max_tokens: 4000,
          temperature: 0,
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

      const text = response.data.choices[0].text;
      console.log("2222", text);

      setData([
        ...data,
        { type: "user", text: prompt },
        { type: "bot", text: text },
      ]);

      setTextInput("");
      setLoading(false);

      // setTopic("");
      // setWords("");
    } catch (e) {
      console.log("its an error", e);
    }
  };


 
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI ChatBot</Text>
      <TouchableOpacity style={{backgroundColor:'#3279E8',margin:10,borderRadius:30,height:20,width:20,alignSelf:'flex-end'}}
       onPress={()=> navigation.navigate('Savedata')}
       >
      
      <Text style={{color:'#fff',alignSelf:'center'}}>+</Text>
      </TouchableOpacity>


      {/* <Modal
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
                    style={styles.textinput2}
                    placeholder="Enter name..."
                  />
                  <TextInput
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                    style={styles.textinput2}
                    placeholder="Enter address..."
                  />


<TouchableOpacity style={{backgroundColor:'#3279E8',padding:10,margin:10,borderRadius:15}}
onPress={()=> saveUser()}
>
      
      
      <Text style={{color:'#fff'}}>Insert Data</Text>
      </TouchableOpacity>


           
                      </View>
        </View>
      </Modal> */}

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        renderItem={({ item }) => (
          <View style={{ flex: 1, width: "100%" }}>
            <View
              style={{
                alignItems: item.type === "user" ? "flex-end" : "flex-start",
                width: "100%",
                flex: 1,
                padding: 8,
                margin: 2,
              }}
            >
              {/* <Text style={{fontWeight:'bold',color : item.type === 'user' ? 'green' : 'red'}}>
            {item.type === 'user' ? 'Question ' : 'Answer'}
            </Text>  */}

              <View
                style={{
                  backgroundColor: item.type === "user" ? "#4484E7" : "#BABEC4",
                  borderRadius: 10,
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16,
                // width: "40%"
                width : item.type === 'user'? '40%': '55%'
                    }}>{item.text}</Text>
                {item.type === "user" ? (
                  <Image
                    source={require("../assets/Images/profile.png")}
                    style={{ marginRight: 5, height: 20, width: 20 }}
                  />
                ) : (
                  <Image
                    source={require("../assets/Images/profile2.png")}
                    style={{ marginRight: 5, height: 25, width: 25 }}
                  />
                )}
              </View>
            </View>
          </View>
        )}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <TextInput
          value={textinput}
          onChangeText={(text) => setTextInput(text)}
          style={styles.textinput}
          placeholder="Message"
        />

        <TouchableOpacity
          onPress={() => handleSend()}
          style={{
            backgroundColor: "#3279E8",
            borderRadius: 20,
            height: 40,
            width: 40,
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <Image
            source={require("../assets/Images/send.png")}
            style={{
              height: 20,
              width: 20,
              alignSelf: "center",
              marginTop: 10,
            }}
          />
        </TouchableOpacity>
      </View>

      {/* <TextInput
        value={words}
        onChangeText={(text) => setWords(text)}
        style={styles.textinput}
        placeholder="Enter the length of words..."
        placeholderTextColor="grey"
      />

      <TextInput
        value={topic}
        onChangeText={(text) => setTopic(text)}
        style={styles.textinput}
        placeholder="Enter the topic name..."
        placeholderTextColor="grey"
      /> */}

      {/* <ScrollView contentContainerStyle={{ flexGrow: 1, height: 3000 }}>
        {loading ? (
          <ActivityIndicator size={"large"} color={"red"} />
        ) : (
          <View>
            {data.map((item) => {
              return (
                <View style={styles.innercontainer}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: item.type === "user" ? "red" : "green",
                    }}
                  >
                    {item.type === "user" ? "Question :" : "Answer :"}
                  </Text>
                  <Text style={styles.bot}>{item.text}</Text>
                </View>
              );
            })}
          </View>
        )}
      </ScrollView> */}
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#3279E8",
    marginTop: 20,
  },
  body: {
    // backgroundColor: "#fffcc9",
    width: "95%",
    margin: 10,
  },
  innercontainer: {
    flexDirection: "row",
  },
  bot: {
    fontSize: 16,
    width: "40%",
  },
  textinput: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 25,

    width: "80%",
    paddingLeft: 10,
    height: 45,
    //  marginBottom:20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#A052E4",
    padding: 10,
    borderRadius: 10,
    width: "30%",
    marginBottom: 10,
    marginTop: 20,
  },
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
    height:450,
    width:'80%'
  },
  textinput2: {
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
});











