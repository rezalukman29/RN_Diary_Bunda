import React from 'react';
import {RefreshControl, SafeAreaView,StyleSheet,View,Image,ToastAndroid,Alert,ScrollView,LayoutAnimation, Platform,UIManager,useWindowDimensions,Dimensions } from 'react-native';
import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
TextInput,useTheme,Avatar, themeColor
} from "react-native-rapi-ui";
import { width,height } from '../components/Dimensions';
import { Fontisto } from '@expo/vector-icons'; 
import { IconArrow } from '../components/IconArrow';
import * as mock from '../components/mock/data'
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputText from '../components/InputText';
import { IconInput } from '../components/IconInput';
import { IconButton } from '../components/IconButton';
import { hideAlert, showAlert } from '../redux/actions/alert';
import {
  LineChart
} from "react-native-chart-kit";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const ToolsScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const { isDarkmode, setTheme } = useTheme();
  const [desc,setDesc] = React.useState('')
  const handleShowAlert = (item,status) => {
      showAlert(item,status)
      setTimeout(() => {
       hideAlert();
    }, 4000);
      
  }
  return (

            <View style={styles.container} >
              <ScrollView  contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 18 }} style={{width: width}}
              contentContainerStyle={styles.scrollView}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }>

              <View style={[styles.sectionWeight,{backgroundColor: isDarkmode?themeColor.success800 : themeColor.success100 }]}>
                <View style={[styles.sectionTitle]}>
                  <View style={{flexDirection: 'row'}}>
                    <IconInput name="scale" color={isDarkmode? themeColor.white : themeColor.black200}/>
                    <Text fontWeight='bold' size="lg" style={styles.title}>WEIGHT</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text fontWeight='regular' size="lg" style={{color:isDarkmode?themeColor.success100 : themeColor.success800,textAlignVertical: 'center',marginHorizontal: 3,}} >See History</Text>
                    <IconArrow name="keyboard-arrow-right"/>
                  </View>
                   
                </View>

                <LineChart
                      data={{
                        labels: ["Frid", "Sat", "Sun", "Mon", "Tue", "Wed","Today"],
                        datasets: [
                          {
                            data: [
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100,
                              Math.random() * 100
                            ]
                          }
                        ]
                      }}
                      width={width * .85} // from react-native
                      height={220}
                      withHorizontalLabels={false}
                      yAxisInterval={1} // optional, defaults to 1
                      chartConfig={{
                        backgroundColor: "transparent",
                        backgroundGradientFrom: isDarkmode?themeColor.success800 : themeColor.success100,
                        backgroundGradientTo: isDarkmode?themeColor.success800 : themeColor.success100,
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = .1) => `rgba(0, 100, 0, ${opacity})`,
                        labelColor: (opacity = 1) => isDarkmode?`rgba(204, 255, 204, ${opacity})`:`rgba(0, 100, 0, ${opacity})`,
                        
                        style: {
                          borderRadius: 16,
                
                        },
                       
                        propsForBackgroundLines:{
                          stroke:"#ffffff"
                        },
                        propsForDots: {
                          r: "6",
                          strokeWidth: "2",
                          stroke: isDarkmode?themeColor.success100 : themeColor.success900
                        }
                      }}
                      bezier
                      style={{
                  
                        borderRadius: 16
                      }}
                    />
                  <View style={{flexDirection: 'row',marginBottom: 8}}>
                    <Text size="h2">{parseInt(Math.random() * 100)}</Text>
                    <Text size="md" style={{alignSelf: 'flex-end'}}>Kg</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                    <Text size="sm" style={{color: isDarkmode?'#EBECF0':'#808080'}}>Update 2h Ago</Text>
                    <TouchableOpacity style={{ bottom: 6}}>
                      <IconInput name="pencil-circle" color={isDarkmode?themeColor.warning200 : themeColor.warning900}/>
                    </TouchableOpacity>
                  </View>
           

              </View>


              <View style={[styles.section,{backgroundColor: isDarkmode?themeColor.warning900 : themeColor.warning200 }]}>
                <View style={[styles.sectionTitle]}>
                  <View style={{flexDirection: 'row'}}>
                    <Fontisto name="slightly-smile" size={24} color={isDarkmode? themeColor.white : themeColor.black200}/>
                    <Text fontWeight='bold' size="lg" style={styles.title}>MOOD</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text fontWeight='regular' size="lg" style={{color:isDarkmode?themeColor.warning200 : themeColor.warning900,textAlignVertical: 'center',marginHorizontal: 3,}} >See History</Text>
                    <IconArrow name="keyboard-arrow-right" />
                  </View>
                   
                </View>
                <ScrollView horizontal>
                    {mock.emoji.map((item,index) => 
                      <TouchableOpacity key={index} style={{paddingHorizontal: 6}} onPress={() => handleShowAlert(item,'info')}>
                             <View style={[styles.picEmoji, {   backgroundColor: isDarkmode?themeColor.warning800 : themeColor.warning300,}]}>
                                <Image source={{uri : item.url}} style={{width: 50, height: 50}}/>
                              </View>
                            <Text size='sm' style={{textAlign: 'center'}}>{item.mood}</Text>
                      </TouchableOpacity>
                    )}
                  </ScrollView>

              </View>

              <View style={[styles.section,{backgroundColor: isDarkmode? '#C21858' : themeColor.danger100 }]}>
                <View style={[styles.sectionTitle]}>
                  <View style={{flexDirection: 'row'}}>
                    <Fontisto name="pinboard" size={24} color={isDarkmode? themeColor.white : themeColor.black200}/>
                    <Text fontWeight='bold' size="lg" style={styles.title}>UPDATE</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text fontWeight='regular' size="lg" style={{color:isDarkmode?themeColor.danger100 : '#C21858',textAlignVertical: 'center',marginHorizontal: 3,}} >See History</Text>
                    <IconArrow name="keyboard-arrow-right"/>
                  </View>
                   
                </View>
                <View style={{padding: 12}}>
                    <InputText
                      placeholder="Add importants note here"  
                      multiline   
                      value={desc}
                      onChangeText={(val) => setDesc(val)}
                      rightContent={
                        <IconButton name="notebook-outline" color={isDarkmode? '#C21858' : themeColor.danger100}/>
                      }
                      numberOfLines={4}
                                       
                    />
                </View>

              </View>

              <View style={[styles.section,{backgroundColor: isDarkmode? '#276880' : themeColor.primary100 }]}>
                <View style={[styles.sectionTitle]}>
                  <View style={{flexDirection: 'row'}}>
                      <Fontisto name="calendar" size={24} color={isDarkmode? themeColor.white : themeColor.black200}/>
                      <Text fontWeight='bold' size="lg" style={styles.title}>APPOINTMENT</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                     <Text fontWeight='regular' size="lg" style={{color:isDarkmode?themeColor.primary100 : '#276880',textAlignVertical: 'center',marginHorizontal: 3,}} >See All</Text>
                      <IconArrow name="keyboard-arrow-right"/>
                  </View>
                   
                </View>
                <View style={{backgroundColor: isDarkmode? 'rgb(24,24,26)' : themeColor.white,height: 100,alignSelf: 'center',borderRadius: 18, padding: 12}}>
                      <Text fontWeight="bold" size="xl">Fri, 8 Jan . 09:00</Text>
                      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text fontWeight="light" size="md" style={{width: width * .7, color: 'gray'}}>Antenatal Visit with Dr. Lukman Adi Saputra</Text>
                        <IconArrow name="keyboard-arrow-right"/>
                      </View>
                </View>
                <Text size="sm" fontWeight='light' style={{top: 12}}>+ 2 more appointments</Text>

              </View>
              </ScrollView>
            </View>
   
  );
};

export default ToolsScreen;


const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',


  },
  section: {
    marginVertical: 12,
    width: width * .9,
    height: 220,
    borderRadius: 24,
    elevation: 3,
    paddingHorizontal: 12
  },
  sectionWeight: {
    marginVertical: 12,
    width: width * .9,
    height: 370,
    borderRadius: 24,
    elevation: 3,
    paddingHorizontal: 12
  }, 
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingVertical: 24
  },
  title: {
    textAlignVertical: 'center'
    ,marginHorizontal: 3,

  },
  picEmoji: {
    width: 70, 
    height: 70, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 60 ,

  },
  scrollView: {


    alignItems: 'center',
  
  },

})
