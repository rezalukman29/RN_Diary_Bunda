import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AskDoctorScreen from '../screen/AskDoctorScreen';
import YourBabyScreen from '../screen/YourBabyScreen';
import AskMotherScreen from '../screen/AskMotherScreen';
import { Header } from '../components/Header';



const Stack = createStackNavigator();


const AskDoctorStackNavigator = ({navigation, route}) => {

  return (
    <Stack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AskDoctor"
      >
     
            <Stack.Screen name={'AskDoctor'} component={AskDoctorScreen} options={{
                title:'',
                headerStyle: {
                  backgroundColor: '#fff',
                  elevation: 0,
                  shadowOffset: {
                    height: 0,
                },
                shadowRadius: 0,
                },
                headerRight: null,

            }}/>

           
    </Stack.Navigator>
  );
}

const YourBabyStackNavigator = ({navigation, route}) => {

  return (
    <Stack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="YourBaby"
      >
     
            <Stack.Screen name={'YourBaby'} component={YourBabyScreen} options={{
                title:'',
                headerStyle: {
                  backgroundColor: '#fff',
                  elevation: 0,
                  shadowOffset: {
                    height: 0,
                },
                shadowRadius: 0,
                },
                headerRight: null,

            }}/>

            
      <Stack.Screen name={'Header'} component={Header} options={{
                title:'',
                headerStyle: {
                  backgroundColor: '#fff',
                  elevation: 0,
                  shadowOffset: {
                    height: 0,
                },
                shadowRadius: 0,
                },
                headerRight: null,

            }}/>

           
    </Stack.Navigator>
  );
}

const AskMotherStackNavigator = ({navigation, route}) => {

  return (
    <Stack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="AskMother"
      >
     
            <Stack.Screen name={'AskMother'} component={AskMotherScreen} options={{
                title:'',
                headerStyle: {
                  backgroundColor: '#fff',
                  elevation: 0,
                  shadowOffset: {
                    height: 0,
                },
                shadowRadius: 0,
                },
                headerRight: null,

            }}/>

           
    </Stack.Navigator>
  );
}

export { AskDoctorStackNavigator,YourBabyStackNavigator,AskMotherStackNavigator}


