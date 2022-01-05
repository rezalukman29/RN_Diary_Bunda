import React, {useState} from 'react';
import {StyleSheet,View,Image,ToastAndroid,Alert, Pressable,LayoutAnimation, Platform,UIManager} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
TextInput,useTheme,Avatar,themeColor
} from "react-native-rapi-ui";

import { width,height } from '../components/Dimensions';
import { SubmitButton } from '../components/SubmitButton';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../redux/actions/auth';
import { Loading } from '../components/Loading';
import ToggleButton from '../components/ToggleButton';
import * as mock from '../components/mock/data'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup';
import { hideNotification } from '../redux/actions/alert';
import * as Animatable from 'react-native-animatable';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

let timeout = null;

const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const { user,isLoading,error,message, theme } = useSelector(state => state.auth);
  const { notification,status} = useSelector(state => state.alert);

  const { isDarkmode, setTheme } = useTheme();
  const noAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFghe9NlnM-gPygO1pbXIp3QDflsCer36gLxnfHQWqVXSamYNUshZe6mbW98mFYAw4Hl0&usqp=CAU'
  const initialForm = {
    name: '',
    email: '',
    password: ''
  }

  const [avatar, setAvatar] = useState(noAvatar);

  React.useEffect(() => {
    notification?showAlert() : ''

  },[notification])

  React.useEffect(() => {
  
    headerLogo('fadeInDown')
    formBar('fadeInUp')
  },[])

  const handleRegister = (values) => {
    Object.assign(values, {avatar: avatar});
   
    register(values,navigation);
    
    
    
 
  }

  const loginValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Name is Required'),
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
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
   
        
    <View style={[styles.container, {backgroundColor: isDarkmode? themeColor.black : '#f4f4f4'}]}>
      <Animatable.View style={{height: height * 0.22, width: '100%', backgroundColor: isDarkmode? themeColor.black : '#f4f4f4', alignItems: 'center', paddingTop: 6}} {...prop}>
                              <Avatar
                                source={{uri:avatar}}
                                size="xl"
                                shape="round"
                                style={{alignSelf: 'center'}}
                              />
        {isLoading?<Loading/>:<ToggleButton/>}
        
      
      </Animatable.View>
    <Animatable.View style={{ backgroundColor: isDarkmode? '#1F2022' : themeColor.white,height: height * .78, width: width ,elevation: 2,borderRadius: 24, padding: 18}} {...propForm}>

      <Text fontWeight="bold" size="h3"  style={{ textAlign: 'left' }}>
            Register  
        </Text>

        <Text style={{ marginVertical: 10 }}>Avatar</Text>
                  <ScrollView horizontal>
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

      <Formik
        validationSchema={loginValidationSchema}

        initialValues={initialForm}
        onSubmit={values => handleRegister(values)}
        
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
                        placeholder="Enter your name"
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
              
                    />
                       {(errors.name && touched.name) &&
                        <Text size="sm" status="danger">{errors.name}</Text>
                      }
                  <Text style={{ marginVertical: 10 }}>Email</Text>
                    <TextInput
                        placeholder="Enter your email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                       {(errors.email && touched.email) &&
                        <Text size="sm" status="danger">{errors.email}</Text>
                      }
                  <Text style={{ marginVertical: 10 }}>Password</Text>
                    <TextInput
                        placeholder="Enter your text"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                    />
                      {(errors.password && touched.password)&&
                        <Text size="sm" status="danger">{errors.password}</Text>
                      }
                  <SubmitButton
                    text="Register"
                    onPress={handleSubmit}
                    disabled={!isValid}
                  />

          </>
      )}
      </Formik>


    </Animatable.View>

    <View style={[styles.alert, !alertVisible && { height: 1, marginTop: -1 }]}>
      <Text style={{padding: 12}} status={status} numberOfLines={5}>{status === 'danger'? error : message }</Text>
    </View>




  </View>
         

  );
}

export default RegisterScreen;

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
  overflow: 'hidden',
  opacity: .8
},
msg: {
  margin: 10,
  marginHorizontal: 20,
  color: 'red'
}
});
