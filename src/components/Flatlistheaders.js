import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Dietplan from '../screens/Dietplan';
import Contentwriting from '../screens/Contentwriting';
import Travelling from '../screens/Travelling';
import Emailwriting from '../screens/Emailwriting';
import Businessfifth from '../screens/Businessfifth';
import Yourselfsixth from '../screens/Yourselfsixth';
import Resumewriting from '../screens/Resumewriting';
import Essaywriting from '../screens/Essaywriting';
import Fitness from '../screens/Fitness';
import * as Animatable from 'react-native-animatable';
import Horoscope from '../screens/Horoscope';
import Kundli from '../screens/Kundli';
import Kids from '../screens/Kids';

const Flatlistheaders = ({navigation}) => {
  const [textinput, setTextInput] = useState();

  console.log(textinput);

  data = [
    {
      text: 'Content Writing',
      img: require('../assets/Images/contentwriting.png'),
      navigation: Contentwriting,
    },
    {
      text: 'Diet Plan',
      img: require('../assets/Images/dietplan.png'),
      navigation: Dietplan,
    },
    {
      text: 'Travelling',
      img: require('../assets/Images/travelling.png'),
      navigation: Travelling,
    },
    {
      text: 'Email Writing',
      img: require('../assets/Images/emailwriting.png'),
      navigation: Emailwriting,
    },
    {
      img: require('../assets/Images/business.png'),
      navigation: Businessfifth,
    },
    {
      img: require('../assets/Images/yourself.png'),
      navigation: Yourselfsixth,
    },
    {
      img: require('../assets/Images/essaywriting.png'),
      navigation: Essaywriting,
    },
    {
      img: require('../assets/Images/Resumewriting.png'),
      navigation: Resumewriting,
    },
    {
      img: require('../assets/Images/fitness.png'),
      navigation: Fitness,
    },
    {
      img: require('../assets/Images/horoscope.png'),
      navigation: Horoscope,
    },
    {
      img: require('../assets/Images/kundli.png'),
      navigation: Kundli,
    },
    {
      img: require('../assets/Images/kids.png'),
      navigation: Kids,
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Animatable.View
        animation="slideInDown"
        iterationCount={5}
        direction="alternate"
        style={{
          borderRadius: 10,
          borderColor: '#7E1AD6',
          margin: 5,
          flex: 1,
          width: '90%',
          marginHorizontal: 20,
        }}>
        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate(item.navigation)}>
          <Image
            source={item.img}
            style={{height: 170, width: 320, resizeMode: 'stretch'}}
          />
        </TouchableOpacity>
      </Animatable.View>
    );
  };



  return <FlatList data={data} renderItem={renderItem} numColumns={1} />;
};

export default Flatlistheaders;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: "center",
    // marginTop: 200,
  },
  modalView: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 20,
    // padding: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  button: {
    borderRadius: 20,

    elevation: 2,
  },
});

// heading :- diet plan , content writing , travelling, emailwriting
