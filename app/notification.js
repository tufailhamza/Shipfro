import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";
import { Stack, useRouter } from "expo-router";
import { ScreenHeaderBtn, Welcome } from "../components";

const { height } = Dimensions.get("window");
const data = [
  {id:1,text:"Notification 1"},
  {id:2,text:"Notification 2"},
  {id:3,text:"Notification 3"},
  {id:4,text:"Notification 4"},
  {id:5,text:"Notification 5"},
  {id:6,text:"Notification 6"},
  {id:7,text:"Notification 7"},
  {id:8,text:"Notification 8"},
  {id:9,text:"Notification 9"},
  {id:10,text:"Notification 10"},
  {id:11,text:"Notification 11"},
  {id:12,text:"Notification 12"},
  {id:13,text:"Notification 13"},
  {id:14,text:"Notification 14"},
];
const notification = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const renderNotificationRow = ({ item }) => (
    <View style={styles.notificationRow}>
      <Text>{item.text}</Text>
    </View>
  );
  // Filter the data based on the searchTerm
  const filteredData = data.filter((item) =>
    item.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
 const handledisplaynotification= ()=>
 {
   
 }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F94949" }}>
      <View style={{ backgroundColor: "#F94949" }}>
        <View style={styles.container}>
          <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
                placeholder="Search"
              />
            </View>
            <Image
              source={icons.search}
              resizeMode="cover"
              style={styles.imagebar1}
            />
            <TouchableOpacity style={styles.searchBtn}>
              <Image
                source={icons.filter1}
                resizeMode="cover"
                style={styles.imagebar}
                onPress={handledisplaynotification}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.markreadcontainer}>
          <Text style={styles.containertext}>Mark all as read</Text>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <ScrollView>
            <FlatList
              data={filteredData} // Use the filtered data
              renderItem={renderNotificationRow}
              keyExtractor={(item) => item.id.toString()}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: "#F94949",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
    height: 50,
    marginRight:10,
    marginLeft:10

  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "80%",
  },
  searchInput: {
    
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  container2: {
    height: height * 0.9, 
    borderWidth: 2, 
    borderColor: COLORS.gray2, 
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  },
  notificationRow: {
    padding: 10,
    height:90,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  imagebar:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 30,
    height: 30,
    flexWrap: 'nowrap',
    marginRight:10,
    tintColor:"white",
    marginLeft:10
  },
  imagebar1:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 30,
    height: 30,
    flexWrap: 'nowrap',
    marginLeft:-50,
    tintColor:"gray"
  },
  markreadcontainer:{
    borderColor:"white",
    borderWidth:2,
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    backgroundColor:"white",
    height:90,
    flexDirection:"row-reverse",
    alignItems:"center"
  },
  containertext:{
    fontWeight:"bold",
    fontSize:15,
    marginRight:20
  },
  
});

export default notification;
