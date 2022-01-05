import React from 'react';
import {StyleSheet,View,Image,ToastAndroid,Alert,ScrollView,LayoutAnimation, Platform,UIManager,useWindowDimensions } from 'react-native';
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
TextInput,useTheme,Avatar, themeColor
} from "react-native-rapi-ui";
import { useSelector } from 'react-redux';
import { IconInput } from '../components/IconInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AskMotherScreen = ({navigation}) => {
  const { isDarkmode, setTheme } = useTheme();
  const { user,theme, users} = useSelector(state => state.auth);
  return (

            
    <View style={[styles.container,{backgroundColor: isDarkmode? 'rgb(24,24,26)' : themeColor.white}]}>
      <View style={[styles.header,{flexDirection: 'row', justifyContent: 'space-between',padding: 12}]}>
        <View style={[styles.subHeader,{flexDirection: 'row'}]}>
          <IconInput name='account-outline' color={isDarkmode? themeColor.white : themeColor.black200} onPress={() => navigation.openDrawer()}/>
          <IconInput name='heart-outline' color={isDarkmode? themeColor.white : themeColor.black200}/>
        </View>
        <View style={[styles.subHeader,{flexDirection: 'row'}]}>
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => navigation.openDrawer()}>
          <Avatar
            source={{uri:user.avatar}}
            size="md"
            shape="round"  
                
          />
          <Text size="lg" style={{paddingHorizontal: 6,textAlignVertical:'center'}}  >{user.name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
   
  );
};

export default AskMotherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },


});