import React , {useState, useEffect, Component}  from 'react';
import { View, StyleSheet,Alert,Image} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Layout,
    Button,
    Text,
    Section,
    SectionContent,Avatar,
    TextInput, useTheme,themeColor
  } from "react-native-rapi-ui";
  import { IconButton } from '../components/IconButton';

import { useSelector, useDispatch } from 'react-redux';
import ToggleButton from '../components/ToggleButton';
import { IconInput } from '../components/IconInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomAlert from '../components/CustomAlert';
import { logout } from '../redux/actions/auth';

const BG_IMG = 'https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/71183f8af65e67f563bd883aa3becd78.png';

export function DrawerContent(props) {
    const { user,theme, users} = useSelector(state => state.auth);
    const { isDarkmode, setTheme } = useTheme();
    const [alertLogout, setAlertLogout] = React.useState(false)
    return(
        <View style={[styles.container]}>
                <CustomAlert 
                    modalVisible={alertLogout} 
                    setModalVisible={setAlertLogout}
                    title={'Log Out Confirmation'}
                    message={'Are you sure want to Log out?'}   
        
                    buttons={[{
                    text: 'No',
            
                    },{
                    text: 'Yes',
                    func: () => {logout(user)},
            
                    }]}
                />
            <Image
            source={require('../../assets/img/db_drawer.png')}
            style={[StyleSheet.absoluteFillObject, {opacity: isDarkmode?1 : .2}]}
            // blurRadius={1}
            />
            <View style={{marginTop: 12, flexDirection: 'row',justifyContent: 'space-around'}}>
                       
                       <Image source={isDarkmode?require('../../assets/img/db_logo_dark.png'):require('../../assets/img/db_logo_light.png')} style={{width:150, height: 60}} resizeMode='contain'/>
                       <ToggleButton/>
                   

                      </View>
                  <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',}}>
                          
                            <Avatar
                                        source={{uri:user.avatar}}
                                        size="lg"
                                        shape="round"        
                            />
                          
                            <View style={{paddingHorizontal: 12, flexDirection:'column',alignSelf: 'center'}}>
                                <Text size="xl" fontWeight='bold'>{user.name}</Text>
                                <Text size="md" fontWeight='light'>{user.name}@gmail.com</Text>
                            </View>
                        </View>


                        </View>


                        
                    </View>

                    <DrawerItem 
                            icon={() => (
                                <IconInput
                                name="stethoscope" 
                                color={isDarkmode? themeColor.white : themeColor.black200}
                               
                             
                                />
                            )}
                            label={() => <Text>Ask Doctor</Text>}
                            onPress={() => {props.navigation.navigate('AskDoctor')}}
                        />

                        
                    <DrawerItem 
                            icon={() => (
                                <IconInput
                                name="baby-face" 
                                color={isDarkmode? themeColor.white : themeColor.black200}
                               
                             
                                />
                            )}
                            label={() => <Text>Your Baby</Text>}
                            onPress={() => {props.navigation.navigate('yourBaby')}}
                        />

                        
                    <DrawerItem 
                            icon={() => (
                                <IconInput
                                name="chat" 
                                color={isDarkmode? themeColor.white : themeColor.black200}
                               
                             
                                />
                            )}
                            label={() => <Text>Ask Mother</Text>}
                            onPress={() => {props.navigation.navigate('askMother')}}
                        />

                    <DrawerItem 
                            icon={() => (
                                <IconInput
                                name="logout" 
                                color={isDarkmode? themeColor.white : themeColor.black200}
                               
                             
                                />
                            )}
                            label={() => <Text>Sign Out</Text>}
                            onPress={() =>setAlertLogout(true)}
                        />

                      


                  </DrawerContentScrollView>

                
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerContent: {
      flex: 1,
      marginVertical: 12
    },
    userInfoSection: {
      paddingLeft: 20,
    },


    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      padding: 2
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    avatar: {
        position: 'absolute'
      },
  });

