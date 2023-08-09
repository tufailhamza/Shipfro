import { useState } from "react";
import { SafeAreaView, ScrollView, View,TextInput } from "react-native";
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
const Home = ({ navigation }) => {
  const handlePressNotofication = ()=>
  {
    navigation.push('notification')
  };
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F94949" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <NewOrderComponent navigation={navigation}/>  
        <RecenltyShipped/>
          
      </ScrollView>

    <Appbar navigation={navigation}/>
    </SafeAreaView>
  );
};

export default Home;