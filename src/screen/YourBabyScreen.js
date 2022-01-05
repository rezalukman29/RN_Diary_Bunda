import React, {useState} from 'react';

import {StyleSheet,View,Image,ToastAndroid,Alert,ScrollView,LayoutAnimation, Platform,UIManager,useWindowDimensions } from 'react-native';
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
TextInput,useTheme,Avatar, themeColor
} from "react-native-rapi-ui";
import { width,height } from '../components/Dimensions';
import { useSelector } from 'react-redux';
import { IconInput } from '../components/IconInput';
import { IconButton } from '../components/IconButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  ToolsScreen  from './ToolsScreen'
import { TabView, SceneMap, TabBar } from '../components/react-native-tab-view/src';

const ProgressRoute = () => (
  <View style={{ flex: 1}} />
);

const ArticlesRoute = () => (
  <View style={{ flex: 1}} />
);


const ToolsRoute = () => (
  <ToolsScreen/>
);

const renderScene = SceneMap({
  progress: ProgressRoute,
  articles: ArticlesRoute,
  tools: ToolsRoute
});

let timeout = null;


const YourBabyScreen = ({navigation}) => {
  const { isDarkmode, setTheme } = useTheme();
  const { user,theme, users} = useSelector(state => state.auth);
  const { notification,message,status} = useSelector(state => state.alert);

  const noAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFghe9NlnM-gPygO1pbXIp3QDflsCer36gLxnfHQWqVXSamYNUshZe6mbW98mFYAw4Hl0&usqp=CAU'
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'progress', title: 'Progress' },
    { key: 'articles', title: 'Articles' },
    { key: 'tools', title: 'Tools' },
  ]);

  React.useEffect(() => {
    setTheme(theme)
 
  },[])
  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: isDarkmode? '#e4eaef' :  '#fe6694' }}
      style={{ backgroundColor:  isDarkmode? 'rgb(24,24,26)' : themeColor.white }}
      labelStyle={{color: isDarkmode? '#e4eaef' : themeColor.black}}
    />
  );

  React.useEffect(() => {
    notification?showAlert() : ''

  },[notification])

  const [alertVisible, setAlertVisible] = useState(false)

  const showAlert = () => {
      LayoutAnimation.easeInEaseOut()
      setAlertVisible(true)
      if (timeout) { clearTimeout(timeout) }
      timeout = setTimeout(() => {
          LayoutAnimation.easeInEaseOut()
          setAlertVisible(false)
      }, 3000);
  }

 
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

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: width }}
      />

      <View style={[styles.alert, !alertVisible && { height: 1, marginTop: -1 }]}>
          <Avatar
            source={{uri:notification?message.url:noAvatar}}
            size="xl"
            shape="round"
            style={{alignSelf: 'center',top: 6}}
          />
          <Text style={{padding: 12,textAlign: 'center'}} status={status} numberOfLines={5}>{user.name} was {message.mood}</Text>
      </View>


    </View>
  );
};

export default YourBabyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  alert: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#1F2022',
    width: '100%',
    overflow: 'hidden',
    opacity: .8,
    height: 120
  },

});
