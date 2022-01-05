import React from 'react';
import {StyleSheet,View,Image,ToastAndroid,Alert,ScrollView,LayoutAnimation, Platform,UIManager} from 'react-native';
import { IconButton } from '../components/IconButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
TextInput,useTheme,Avatar, themeColor
} from "react-native-rapi-ui";
import { useSelector } from 'react-redux';
import {DrawerActions} from '@react-navigation/native';

export function Header({navigation}) {

  const { isDarkmode, setTheme } = useTheme();
  const { user,theme, users} = useSelector(state => state.auth);

  return (
    <View style={[styles.header,{flexDirection: 'row', justifyContent: 'space-between'}]}>
    <View style={[styles.subHeader,{flexDirection: 'row'}]}>
      <IconButton name='face-woman-outline'/>
      <IconButton name='heart-outline'/>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6
  },
  header: {

  }

});
