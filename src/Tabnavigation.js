import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Chatting from "./screens/Chatting";
import Profile from "./screens/Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const Tabnavigation = () => {
  return (
      <Tab.Navigator
        screenOptions={{
          activeTintColor: "#000",

          inactiveTintColor: "#000",
          activeBackgroundColor: "#000",
          inactiveBackgroundColor: "#000",

          
          tabStyle: {
            height: 60,
            alignItems: "center",
            justifyContentL: "center",
          },
          tabBarStyle : {
            height:60,
            borderRadius:20,
            bottom:5,
            marginHorizontal:10,
            backgroundColor:'#7A65DB'
          }
        }}
      >
        <Tab.Screen
          activeColor="red"
          inactiveColor="white"
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  position: focused ? "absolute" : "relative",
                  bottom: focused ? 5 : null, // space from bottombar
                  height: 60,
                  borderRadius:30,
                  width: 60,
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  justifyContent: "center",
                  alignItems: "center",
                   backgroundColor: focused ? "#7A65DB" : null,
                }}
              >
                  <View
                  style={focused ? {
                    margin: 5,
                    // backgroundColor: '#fff',
                    padding: 5,
                    borderRadius: 30,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                  }: {justifyContent:'center',alignItems:'center'}}
                >
                {/* <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={focused ? 38 : 38}
                /> */}
                <Image source={require('./assets/Images/home.png')} style={{height: 38,width:38}}/>
                {focused ? null : (
                  <Text style={{ color: '#fff', fontSize: 9 }}>Home</Text>
                )}
                </View>
              </View>
            ),
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarOptions: {
              activeTintColor: "#cd077d",
            },
            tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View
              style={{
                position: focused ? "absolute" : "relative",
                bottom: focused ? 5 : null, // space from bottombar
                height: 59,
                width: 59,
                padding:10,
                borderRadius:30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                  backgroundColor: focused ? "#7A65DB" : null,
              }}
              >
                  <View
                 style={focused ? {
                  margin: 5,
                  // backgroundColor: '#fff',
                  padding: 5,
                  borderRadius: 30,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }: {justifyContent:'center',alignItems:'center'}}
                >
                {/* <AntDesign
                  name="pluscircleo"
                  color={color}
                  size={focused ? 38 : 38}
                /> */}
                <Image source={require('./assets/Images/chat.png')} style={{height:40,width:40}}/>
                {focused ? null : (
                  <Text style={{ color: '#fff', fontSize: 9 }}>Chatting</Text>
                )}
                </View>
              </View>
            ),
          }}
          name="Chatting"
          component={Chatting}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View
              style={{
                position: focused ? "absolute" : "relative",
                bottom: focused ? 5 : null, // space from bottombar
                height: 60,
                width: 60,
                borderRadius:30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                 backgroundColor: focused ? "#7A65DB" : null,
              }}
              >
                <View
                  style={focused ? {
                    margin: 5,
                    backgroundColor: '',
                    padding: 5,
                    borderRadius: 30,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                  }: {justifyContent:'center',alignItems:'center'}}
                >
                  {/* <MaterialCommunityIcons
                    name="file-settings-outline"
                    color={color}
                    size={focused ? 36 : 34}
                  /> */}
                  <Image source={require('./assets/Images/settings1.png')} style={{height:40,width:40}}/>
                  {focused ? null : (
                    <Text style={{ color: '#fff', fontSize: 9 }}>Profile</Text>
                  )}
                </View>
              </View>
            ),
          }}
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
  );
};

export default Tabnavigation;

const styles = StyleSheet.create({});


