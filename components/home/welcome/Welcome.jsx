import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";
import { color } from "react-native-reanimated";


const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Track Your Parcel</Text>
        <Text style={styles.welcomeMessage}>Enter your parcel tracking number</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='Enter Tracking Number'
          />
          
        </View>

        <TouchableOpacity activeOpacity={1} style={styles.searchBtn} onPress={handleClick}>
          <Text style={{color:"white"}} >
            TRACK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
