import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Stacknavigation from "./Stacknavigation";

const Drawer = createDrawerNavigator();

const Drawernavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Stacknavigation"
      // drawerContent={(props) => <Customdrawer {...props} />}
      screenOptions={
        {
          //   headerShown: false,
          //   drawerStyle: {
          //     width: width,
          //   },
        }
      }
    >
      <Drawer.Screen name="Stacknavigation" component={Stacknavigation} />
    </Drawer.Navigator>
  );
};

export default Drawernavigation;

const styles = StyleSheet.create({});
