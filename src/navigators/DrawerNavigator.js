import React from "react";
import { View, StyleSheet,Alert } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="askDoctor" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;