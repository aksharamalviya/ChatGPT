import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabnavigation from "./Tabnavigation";
import Home from "./screens/Home";
import Chatting from "./screens/Chatting";
import Drawernavigation from "./Drawernavigation";
import { enableScreens } from "react-native-screens";
import Dietplan from "./screens/Dietplan";
import Contentwriting from "./screens/Contentwriting";
import Travelling from "./screens/Travelling";
import Emailwriting from "./screens/Emailwriting";
import Slider from "./screens/Slider";
import Businessfifth from "./screens/Businessfifth";
import Yourselfsixth from "./screens/Yourselfsixth";
import Resumewriting from "./screens/Resumewriting";
import Essaywriting from "./screens/Essaywriting";
import TabBar from "./screens/TabBar";
import Fitness from "./screens/Fitness";
import Animationscreen from "./screens/Animationscreen";
import Horoscope from "./screens/Horoscope";
import Kundli from "./screens/Kundli";
import Kids from "./screens/Kids";
import Savedata from "./screens/Savedata";

enableScreens();
const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name="Tabnavigation" component={Tabnavigation} />
      <Stack.Screen name="Dietplan" component={Dietplan} />
      <Stack.Screen name="Contentwriting" component={Contentwriting} />
      <Stack.Screen name="Travelling" component={Travelling} />
      <Stack.Screen name="Emailwriting" component={Emailwriting} />
      <Stack.Screen name="Businessfifth" component={Businessfifth} />
      <Stack.Screen name="Yourselfsixth" component={Yourselfsixth} />
      <Stack.Screen name="Resumewriting" component={Resumewriting} />
      <Stack.Screen name="Essaywriting" component={Essaywriting} />
      <Stack.Screen name="TabBar" component={TabBar} />
      <Stack.Screen name="Fitness" component={Fitness} />
      <Stack.Screen name="Animationscreen" component={Animationscreen} />
      <Stack.Screen name="Horoscope" component={Horoscope} />
      <Stack.Screen name="Kundli" component={Kundli} />
      <Stack.Screen name="Kids" component={Kids} />
      <Stack.Screen name="Savedata" component={Savedata} />
    </Stack.Navigator>
  );
};

export default Stacknavigation;

const styles = StyleSheet.create({});
