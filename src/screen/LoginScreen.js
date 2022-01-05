import React, { useState } from 'react';
import {StyleSheet,View,Image,ToastAndroid,Alert,ScrollView,LayoutAnimation, Platform,UIManager} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
TextInput,useTheme,Avatar, themeColor
} from "react-native-rapi-ui";
import { Ionicons } from '@expo/vector-icons';
import { width,height } from '../components/Dimensions';
import { SubmitButton } from '../components/SubmitButton';
import { useSelector } from 'react-redux';
import { login, loginRequest } from '../redux/actions/auth';
import { Loading } from '../components/Loading';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ToggleButton from '../components/ToggleButton';
import { TextMessage } from '../components/TextMessage';
import { TextError } from '../components/TextError';
import { Formik } from 'formik';
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';
import { IconButton } from '../components/IconButton';
import { IconInput } from '../components/IconInput';
import * as mock from '../components/mock/data'


// const types = ['bounceIn', 'bounceInDown', 'bounceInUp', 'bounceInLeft', 'bounceInRight', 'fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInUp', 'fadeInUpBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'lightSpeedIn', 'slideInDown', 'slideInUp', 'slideInLeft', 'slideInRight', 'zoomIn', 'zoomInDown', 'zoomInUp', 'zoomInLeft', 'zoomInRight']
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

let timeout = null;
let message = '';



const LoginScreen = ({navigation}) => {

  const { user,isLoading,error, message,users,theme} = useSelector(state => state.auth);
  const { notification,status} = useSelector(state => state.alert);
  const noAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFghe9NlnM-gPygO1pbXIp3QDflsCer36gLxnfHQWqVXSamYNUshZe6mbW98mFYAw4Hl0&usqp=CAU'
  const [avatar, setAvatar] = useState(noAvatar);


  const { isDarkmode, setTheme } = useTheme();
  const initialForm = {
    name: ''
  }
  const handleLogin = (values) => {
  Object.assign(values, {avatar: avatar});
   login(values); 
  
  }

  React.useEffect(() => {
    setTheme(theme)
  },[])
 
  React.useEffect(() => {
    notification?showAlert() : ''

  },[notification])


  React.useEffect(() => {
  
    headerLogo('fadeInDown')
    formBar('fadeInUp')
  },[theme])
 
  const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is Required'),

  })


  const [animation, setAnimation] = useState({
    visible: false,
    type: ''
  })
  const [animationForm, setAnimationForm] = useState({
    visible: false,
    type: ''
  })
  
  const headerLogo = (type) => {
    setAnimation({ visible: false, type })
    setTimeout(() => {
        setAnimation({ visible: true, type })
    }, 1);
  }

  const formBar = (type) => {
    setAnimationForm({ visible: false, type })
    setTimeout(() => {
        setAnimationForm({ visible: true, type })
    }, 1);
  }
  const prop = animation.visible ? { animation: animation.type } : {}
  const propForm = animationForm.visible ? { animation: animationForm.type } : {}


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
   
      
            <View style={[styles.container]}>
              <ScrollView>
              <Animatable.View style={{height: height * 0.3, width: '100%', backgroundColor: '#fff0f3', alignItems: 'center'}} {...prop}>
                <Image source={require('../../assets/img/db_header.jpg')} style={{width: '100%',height: '100%',resizeMode: 'contain'}}/>
               
                
              
              </Animatable.View>
              <Animatable.View style={{ backgroundColor: isDarkmode? '#1F2022' : themeColor.white,height: height * .7, width: width ,elevation: 2,borderTopLeftRadius: 24,borderTopRightRadius: 24, padding: 18}} {...propForm}>
          
              <Text fontWeight="bold" size="h3"  style={{ textAlign: 'left', marginTop: 12 }}>
                      Login  
                  </Text>
                  <Avatar
                                source={{uri:avatar}}
                                size="xl"
                                shape="round"
                                style={{alignSelf: 'center'}}
                              />
                  <Text style={{ marginVertical: 10 }}>Avatar</Text>
                  <ScrollView horizontal >
                    {mock.people.map((item,index) => 
                      <TouchableOpacity key={index} style={{paddingHorizontal: 3}} onPress={() => setAvatar(item.url)}>
                                <Avatar
                                  source={{uri:item.url}}
                                  size="md"
                                  shape="round"
                                
                            />
                      </TouchableOpacity>
                    )}
                  </ScrollView>
                  <View style={{bottom: 30}}>
                      <Formik
                        validationSchema={loginValidationSchema}

                        initialValues={initialForm}
                        onSubmit={values => handleLogin(values)}
                        
                      >
                        {({      
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          values,
                          errors,
                          touched,
                          isValid, }) => (
                          <>
                              <Text style={{ marginVertical: 10 }}>Name</Text>
                                <TextInput
                                    placeholder="Enter your Name"                      
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}
                                />
                                  {(errors.name && touched.name) &&
                                    <Text size="sm" status="danger">{errors.name}</Text>
                                  }
          

                              <SubmitButton
                                text="Login"
                                onPress={handleSubmit}
                                disabled={!isValid}
                             
                              />

                          </>
                      )}
                      </Formik>
                      {isLoading?<Loading/>:<ToggleButton/>}
                </View>
           
                    
            
              </Animatable.View>


              <View style={[styles.alert, !alertVisible && { height: 1, marginTop: -1 }]}>
                <Text style={{padding: 12}} status={status} numberOfLines={5}>{status === 'danger'? error : message }</Text>
              </View>

          
         
              </ScrollView>
            </View>
        

  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#fff0f3'
    
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
  overflow: 'hidden',
  opacity: .8
},
msg: {
  margin: 10,
  marginHorizontal: 20,
  color: 'red'
}
});
