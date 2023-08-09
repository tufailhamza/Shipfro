import { useState } from "react";
import { SafeAreaView, ScrollView, View,TextInput,Text,StyleSheet,Button,Image ,FlatList} from "react-native";
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
const packageData = [
    {
      id: 1,
      title: 'Package 1',
      courierProvider: 'FedEx',
      startingPoint: 'KHI',
      endingPoint: 'ISB',
      parcelDate: '2023-08-01',
      ID: 'ABC123',
      dimensions: '10 x 15 x 8 cm',
      description: 'Package 1 details here...',
      logo: icons.openbox // Replace with the path to FedEx logo image
    },
    {
      id: 2,
      title: 'Package 2',
      courierProvider: 'DHL',
      startingPoint: 'LHR',
      endingPoint: 'NYC',
      parcelDate: '2023-07-30',
      ID: 'XYZ789',
      dimensions: '20 x 30 x 25 cm',
      description: 'Package 2 details here...',
      logo:icons.envelop, // Replace with the path to DHL logo image
    }
    // Add more package data as needed
  ];
const Home = ({ navigation }) => {
    
  const handlePressNotofication = ()=>
  {
    navigation.push('notification')
  };
  const isvalid =true;
  const router = useRouter()
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const [Weight, setWeight] = useState("");
  const [selectedDomestic, setSelectedDomestic] = useState(true);
  const handlePressSeeall = (destination) => {
    navigation.push('History')
  };
 
  
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F94949" }}>
   
      <View
        style={{
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <Welcome
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={() => {
            if (searchTerm) {
              router.push(`/search/${searchTerm}`)
            }
          }}
        />
      
      </View>
     <View style={{marginBottom:30}}>
        <Text style={styles.heading}>Recent Parcels</Text>
     {packageData.map((packageItem) => (
          <TouchableOpacity
          activeOpacity={1}
            key={packageItem.id}
            style={styles.card}
            onPress={() => handleImageClick(packageItem.title)}
          >
            {/* Upper Left: Courier Logo and Package Title */}
            <View style={styles.upperLeft}>
              <Image source={icons.amazon} style={styles.courierLogo} />
              <Text style={styles.cardTitle}>{packageItem.title}</Text>
              <Text style={styles.courierName}>{packageItem.courierProvider}</Text>
              <Text style={styles.dimensions}>{packageItem.dimensions}</Text>
            </View>

            {/* Upper Right: Parcel Status */}
            <View style={styles.upperRight}>
              <Text style={styles.parcelStatus}>Parcel Status</Text>
              {/* Add status information here */}
            </View>

            {/* Bottom Left: Starting and Ending Point */}
            <View style={styles.bottomLeft}>
              <Text style={styles.pointText}>{packageItem.startingPoint}</Text>
              <Text style={styles.pointText}>{packageItem.endingPoint}</Text>
            </View>

            {/* Bottom Right: Parcel Date and ID */}
            <View style={styles.bottomRight}>
              <Text style={styles.parcelDate}>{packageItem.parcelDate}</Text>
              <Text style={styles.parcelId}>ID: {packageItem.ID}</Text>
            </View>

            <Image source={icons.rightarrow} style={styles.arrowIcon} />
          </TouchableOpacity>
        ))}
        <TouchableOpacity
   activeOpacity={1}
        style={[styles.buttonselected,{marginTop:10,marginBottom:10,width:300,height:50,borderRadius:40,marginLeft:35,marginBottom:20} ]}
        onPress={handlePressSeeall}
      >
        <Text style={{ color: 'white',fontWeight:"bold",margin:10 }}>
          See All
        </Text>
      </TouchableOpacity>
      </View>
        
        
  <Appbar navigation={navigation}/>
  </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
        width: "80%",
        margin:20
      },
      container1: {
    
        height:150,
        width: "92%",
        margin:20,
        backgroundColor:COLORS.lightWhite,
        borderRadius:15,
        
      },
      userName: {
        fontSize: 27, // You can adjust the font size as needed
        fontWeight: 'bold',
        color: COLORS.lightWhite,
      },
      
      pointone:{
        marginLeft:30,
        marginTop:10,
        flexDirection:"column",
         width:30,
         height:100
      },
      searchContainer: {
        justifyContent: "center",
        flexDirection:"column",
        marginTop: SIZES.small,
        height: 50,
        paddingTop:10
      },
      searchWrapper: {
        marginRight: SIZES.small,
        marginTop:10,
        borderRadius: SIZES.medium,
        height: "80%",
        borderWidth:2,
        width:280,
        flexDirection:"row"
      },
      searchInput: {
       
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
      }
      ,card: {
        backgroundColor: COLORS.white,
        width: 350,
        height: 150,
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:20
      },
      upperLeft: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      upperRight: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      bottomLeft: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
      },
      bottomRight: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      },
      cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      courierName: {
        fontSize: 14,
        color: COLORS.lightGray,
      },
      dimensions: {
        fontSize: 12,
        color: COLORS.lightGray,
      },
      courierLogo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
      },
      parcelStatus: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      pointText: {
        fontSize: 12,
        color: COLORS.lightGray,
      },
      parcelDate: {
        fontSize: 12,
        color: COLORS.lightGray,
      },
      parcelId: {
        fontSize: 12,
        color: COLORS.lightGray,
      },
      arrowIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.lightGray,
      },
      searchInput2:{
           backgroundColor:COLORS.lightWhite,
           borderRadius :38,
           paddingLeft:10,
           width:150,
           margin:10
      },
      heading: {
        fontSize: 24,
        color:COLORS.lightWhite,
        fontWeight: 'bold',
       marginBottom:10,
        paddingLeft:10
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