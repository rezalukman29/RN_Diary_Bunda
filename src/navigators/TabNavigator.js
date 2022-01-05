
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AskDoctorStackNavigator, YourBabyStackNavigator, AskMotherStackNavigator } from "./MainStackNavigator";
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
TextInput,useTheme,Avatar, themeColor
} from "react-native-rapi-ui";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// import TabBar from 'react-native-custom-navigation-tabs'
const Tab = createBottomTabNavigator();

//Screen names
const askDoctor = "askDoctor";
const yourBaby = "yourBaby";
const askMother = "askMother";


const BottomTabNavigator = () => {
  const { isDarkmode, setTheme } = useTheme();
return (
  <Tab.Navigator
  initialRouteName={AskDoctorStackNavigator}
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let rn = route.name;

      if (rn === askDoctor) {
        iconName = focused ? 'stethoscope' : 'stethoscope';

      } else if (rn === yourBaby) {
        iconName = focused ? 'baby-face' : 'baby-face-outline';

      } else if (rn === askMother) {
        iconName = focused ? 'chat' : 'chat-outline';
      }

      // You can return any component that you like here!
      return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: isDarkmode? '#e4eaef' : '#fe6694',
    inactiveTintColor: 'grey',
    showLabel: true,
    labelStyle: { paddingVertical: 3, fontSize: 12 },
    style: {  height: 55,backgroundColor: isDarkmode?'rgb(24,24,26)': themeColor.white}
    
  }}>

  <Tab.Screen name={askDoctor} component={AskDoctorStackNavigator} />
  <Tab.Screen name={yourBaby} component={YourBabyStackNavigator} />
  <Tab.Screen name={askMother} component={AskMotherStackNavigator} />


</Tab.Navigator>
);
};

export default BottomTabNavigator;