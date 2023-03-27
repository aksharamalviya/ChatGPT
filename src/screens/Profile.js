// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
//   Alert,
//   Image,
// } from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {openDatabase} from 'react-native-sqlite-storage';
// let db = openDatabase({name: 'UserDatabase.db'});

// const Profile = () => {

//   const [userList, setUserList] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     db.transaction(tx => {
//       tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
//         var temp = [];
//         for (let i = 0; i < results.rows.length; ++i)
//           temp.push(results.rows.item(i));
//         setUserList(temp);
//       });
//     });
//   };


//   let deleteUser = id => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'DELETE FROM  table_user where user_id=?',
//         [id],
//         (tx, results) => {
//           console.log('Results', results.rowsAffected);
//           if (results.rowsAffected > 0) {
//             Alert.alert(
//               'Success',
//               'User deleted successfully',
//               [
//                 {
//                   text: 'Ok',
//                   onPress: () => {
//                     getData();
//                   },
//                 },
//               ],
//               {cancelable: false},
//             );
//           } else {
//             Alert.alert('Please insert a valid User Id');
//           }
//         },
//       );
//     });
//   };


//   const updateUser = () => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'UPDATE table_user set name=? , address=? where user_id=?',
//         [name,address],
//         (tx, results) => {
//           console.log('Results', results.rowsAffected);
//           if (results.rowsAffected > 0) {
//             Alert.alert(
//               'Success',
//               'User updated successfully',
//               [
//                 {
//                   text: 'Ok',
//                   onPress: () => navigation.navigate('Chatting'),
                
//                 },
//               ],
              
//               {cancelable: false},
//             );
//           } else Alert.alert('Updation Failed');
//         },
//       );
//     });
//   };

//   return (
//     <View style={{flex:1}}>
//        <FlatList
//         data={userList}
//         renderItem={({item, index}) => {
//           return (
//             <View style={styles.userItem}>
//               <View>
//               <Text style={styles.itemText}>{'Name: ' + item.name}</Text>
              
//               <Text style={styles.itemText}>{'Address: ' + item.address}</Text>
//               </View>
//               <TouchableOpacity  onPress={()=> updateUser()}>
             
//                   <Image
//                     source={require('../assets/Images/editing.png')}
//                     style={{height:20,width:20}}
//                   />
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                 onPress={()=> deleteUser(item.user_id)}
//                   >
//                   <Image
//                     source={require('../assets/Images/delete.png')}
//                     style={{height:20,width:20}}
//                   />
//                 </TouchableOpacity>
            


//             </View>
//           );
//         }}
//       />
//     </View>
//   )
// }

// export default Profile

// const styles = StyleSheet.create({
//   userItem: {
//     width: '100%',
//     backgroundColor: '#c79de0',
//     padding: 10,
//     flexDirection:'row',
//     justifyContent:'space-between',
//     marginVertical:10
//   },
//   itemText: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#000',
//   },
// })


import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';
let db = openDatabase({name: 'UserDatabase.db'});
const Profile = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getData();
  }, [isFocused]);
  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setUserList(temp);
      });
    });
  };
  let deleteUser = id => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    getData();
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('Please insert a valid User Id');
          }
        },
      );
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={userList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.userItem}>
              <View>
              <Text style={styles.itemText}>{'Name: ' + item.name}</Text>
             
              <Text style={styles.itemText}>{'Address: ' + item.address}</Text>
              </View>
              <View style={styles.belowView}>
                
                <TouchableOpacity
                  onPress={() => {
                    deleteUser(item.user_id);
                  }}>
                  <Image
                    source={require('../assets/Images/delete.png')}
                    style={{height:20,width:20}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addNewBtn: {
    backgroundColor: '#b279d4',
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  userItem: {
    width: '100%',
    backgroundColor: '#c79de0',
    padding: 10,
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10,
    justifyContent:'space-between'
  },
  itemText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000',
  },
  belowView: {
    // flexDirection: 'row',
    // width: '100%',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    // marginTop: 20,
    // backgroundColor: '#f2f2f2',
    // borderRadius: 10,
    // height: 50,
  },
  icons: {
    width: 24,
    height: 24,
  },
});