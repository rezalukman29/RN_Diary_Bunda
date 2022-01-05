
import * as React from 'react';
import { themeColor,useTheme,Text } from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet,View,Image,ToastAndroid,Alert,ScrollView,LayoutAnimation, Platform,UIManager} from 'react-native';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

let timeout = null;

export function NotifAlert(){
  const { isDarkmode, setTheme } = useTheme();
  const [alertVisible, setAlertVisible] = useState(false)
  

  return (

  
    <View style={[styles.alert, !alertVisible && { height: 1, marginTop: -1 }]}>
    <Text style={styles.msg} numberOfLines={5}>Mantap</Text>
  </View>
   
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    
  },
  sectionContent: {
    width: width * 0.9
  },
  titleLogin: {

  
  },
  view: {
    height: 80,
    marginVertical: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
},
type: {
    color: '#fff',
    fontSize: 17
},

alert: {
  position: 'absolute',
  top: 0,
  backgroundColor: '#1F2022',
  width: '100%',
  overflow: 'hidden'
},
msg: {
  margin: 10,
  marginHorizontal: 20,
  color: 'red'
}
});

