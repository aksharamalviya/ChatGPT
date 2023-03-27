import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation} from '@react-navigation/native';
let db = openDatabase({name: 'UserDatabase.db'});


const Savedata = () => {


  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');


  const saveUser = () => {
    console.log(name, address);

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (name,address) VALUES (?,?)',
        [name, address],
        (tx, results) => {
          var id = results.insertId;

          console.log('Results', results.rowsAffected + '\n' + id);
          navigation.navigate('Profile')
        },
        error => {
          console.log(error);
        },
      );
    });
  };

  useEffect(() => {
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        (tx, res) => {
          if (res.rows.length == 0) {
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20),address VARCHAR(100))',
              [],
            );
          }
        },
        error => {
          console.log(error);
        },
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        style={styles.textinput2}
        placeholder="Enter name..."
      />
      <TextInput
        value={address}
        onChangeText={text => setAddress(text)}
        style={styles.textinput2}
        placeholder="Enter address..."
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#b279d4',
          padding: 10,
          marginTop: 20,
          borderRadius: 15,
          width: '80%',
          alignSelf: 'center',
        }}
        onPress={() => saveUser()}>
        <Text style={{color: '#fff', textAlign: 'center'}}>Insert Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Savedata;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.3,
    alignSelf: 'center',
    paddingLeft: 20,
    marginTop: 100,
  },
  addBtn: {
    backgroundColor: 'purple',
    width: '80%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  textinput2: {
    borderWidth: 1,
    alignSelf: 'center',
    color: '#000',
    borderRadius: 20,
    borderColor: 'lightgrey',
    width: '80%',
    paddingLeft: 10,
    height: 45,
    marginTop: 20,
  },
});
