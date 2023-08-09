import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, icons, images, SIZES } from "../../../constants";
import { Stack, useRouter } from "expo-router";
const NewOrderComponent = ({navigation}) => {
 
  const router = useRouter()
  const handleImageClick = (destination) => {
    navigation.push('Trackscreen')
  };

  return (
    <View style={styles.container}>
    <Text style={styles.heading}>New Order</Text>
      <Text style={styles.subHeading}>Choose what you'd like to send:</Text>
      <View style={styles.container2}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImageClick('Envelope')}>
          <Image source={icons.envelop} style={styles.image} />
        </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImageClick('Envelope')}>
          <Image source={icons.boex} style={styles.image} />
      
        </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => handleImageClick('Envelope')}>
          <Image source={icons.Pallet} style={styles.image} />
        
        </TouchableOpacity>
        </View>
        </View>
        <View style={styles.textcontainer}>
           <Text style={styles.text}>Envelope</Text>
           <Text style={styles.text}>Box</Text>
           <Text style={styles.text}>Pallet</Text>
        </View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginLeft:10,
   marginTop:20,
   
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
     marginTop:20
  },
  heading: {
    fontSize: 24,
    color:COLORS.lightWhite,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  subHeading: {
    fontSize: 15,
    color:COLORS.lightWhite,
    marginBottom: 20,
  },
  imageContainer: {
    
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius:10,
    backgroundColor:COLORS.lightWhite
  },
  image: {
    width: 50,
    height: 50,
    margin:20
  },
  textcontainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap:'wrap',
    marginTop:10
  }
  ,text:
  {
    fontWeight: 'bold',
    color:COLORS.lightWhite,
    paddingRight:10
  }
});

export default NewOrderComponent;
