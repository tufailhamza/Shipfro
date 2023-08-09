import { useState } from "react";
import { SafeAreaView, ScrollView, View,TextInput,Text,StyleSheet,Button,Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, icons, images, SIZES } from "../constants";
import {
  ScreenHeaderBtn,
  Welcome
} from "../components";
import RecenltyShipped from "../components/home/RecentlyShipped/RecentlyShipped";
import NewOrderComponent from '../components/home/NewOrder/NewOrder'
import Appbar from '../components/home/AppBar/Appbar'
import { TouchableOpacity } from "react-native-gesture-handler";
const Home = ({ navigation }) => {
  const handleImageClick = (destination) => {
   navigation.navigate('notification')
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite,flexDirection:"column",justifyContent:"center" }}>
      <View style={{marginLeft:30,marginTop:100}}>
       <Text style={styles.containertext}>
        Menu
       </Text>
       <View style={{marginTop:40,flexDirection:"row"}}>
       <Image
        source={images.profile}
        resizeMode='cover'
        style={{width:100,height:100,borderRadius:50,marginLeft:10}}
      />
      <View style={{}}>
       <Text style={styles.Title}>John Smith</Text>
        <Text style={styles.subheading}>See Your Profile</Text>
        </View>
      </View>
      </View>
      <View style={{width:350,height:350,backgroundColor:COLORS.lightWhite,margin:20,marginTop:30,flexDirection:"row",justifyContent:"center"}}>
    <View style={{marginTop:20,width:"90%"}}>
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10,height:70 }}>
        <Image source={icons.contact} style={{ width: 20, height: 20, marginRight: 10 }} />
        <Text style={{fontSize:20}}>Address Book</Text>
      </TouchableOpacity>
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10,height:70 }}>
        <Image source={icons.support} style={{ width: 20, height: 20, marginRight: 10 }} />
        <Text style={{fontSize:20}}>Customer Service</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10,height:70 }} onPress={handleImageClick}>
        <Image source={icons.menu} style={{ width: 20, height: 20, marginRight: 10 }}  />
        <Text style={{fontSize:20}}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10,height:70 }}>
        <Image source={icons.setting} style={{ width: 20, height: 20, marginRight: 10 }} />
        <Text style={{fontSize:20}}>SETTINGS</Text>
      </TouchableOpacity>
    </View>
      </View>
      <TouchableOpacity
   activeOpacity={1}
        style={[styles.buttonselected,{marginTop:10,marginBottom:10,width:300,height:50,borderRadius:40,marginLeft:35,marginBottom:20} ]}
        
      >
        <Text style={{ color: 'white',fontWeight:"bold",margin:10 }}>
         Logout
        </Text>
      </TouchableOpacity>
      <View style={{marginTop:50}}>
      <Appbar  navigation={navigation}/> 
      </View>
      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containertext:{
    fontWeight:"bold",
    fontSize:30,
    marginRight:20
  },
  Title:{
    fontSize: 30, // You can adjust the font size as needed
    fontWeight: 'bold',
    margin:15,
    marginBottom:-5
  },
  subheading:{
    fontSize:15,
    color:"grey"
  },
  buttonselected: {
    backgroundColor: 'black',
    zIndex: 10,
    marginTop: -10,
    height: 45,
    width: 160,
    borderRadius: 15,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
})
export default Home;