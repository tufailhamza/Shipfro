import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from "../../../constants";
const Appbar = ({navigation}) => {
  const router = useRouter();

  const handlePressHome = () => {
    navigation.navigate('Home');
  };
  const handlePressHTrack = () => {
    navigation.navigate('TrackerOg');
  };
  const handlePressHistory = () => {
    navigation.navigate('History');
  };
  const handlePressMenu = () => {
    navigation.navigate('Menu');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePressHome}>
      <Image
        source={icons.Home}
        resizeMode='cover'
        style={styles.imagebar}
      />
        <Text style={styles.buttonText}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePressHTrack}>
      <Image
        source={icons.searchbar}
        resizeMode='cover'
        style={styles.imagebar}
      />
        <Text style={styles.buttonText}>TRACK                                                                  </Text>
      </TouchableOpacity>
      <View style={styles.middleButtonContainer}>
        <TouchableOpacity style={styles.middleButton}>
        <Image
        source={icons.openbox}
        resizeMode='cover'
        style={styles.imagebarmiddle}
      />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePressHistory}>
      <Image
        source={icons.History}
        resizeMode='cover'
        style={styles.imagebar}
      />
        <Text style={styles.buttonText}>HISTORY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handlePressMenu}>
      <Image
        source={icons.menubar}
        resizeMode='cover'
        style={styles.imagebar}
      />
        <Text style={styles.buttonText}>MENU</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
 
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#EFEFEF',
    marginHorizontal: 10,
  },
  middleButtonContainer: {
    position: 'absolute',
    top: -30, // Adjust this value to move the circle upward
    left: '50%',
    marginLeft: -30,
    zIndex: 1,
  },
  middleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
  
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 12,
    marginTop:5,
    paddingLeft:10
  },
  middleButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  imagebar:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 20,
    height: 20,
    flexWrap: 'nowrap',
    
  },
  imagebarmiddle:{
    display: 'flex',
    alignItems: 'center',
    width: 35,
    height: 35
  }
});

export default Appbar;
