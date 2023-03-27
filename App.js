import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import Drawernavigation from './src/Drawernavigation'
import Stacknavigation from './src/Stacknavigation'

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      
      {/* <Drawernavigation/> */}
      <Stacknavigation/>
      
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
