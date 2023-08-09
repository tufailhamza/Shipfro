import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../homescreen'
import notification from "../notification"
import Trackscreen from '../Trackscreen'
import History from '../HistorySCreen'
import Menu from '../Menu'
import TrackerOg from '../TrackerOG'
import { COLORS, icons, images, SIZES } from "../../constants";
import {
    ScreenHeaderBtn,
    Welcome
  } from "../../components";
const Screens ={
    Home:{
        screen: Home,
         navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension='60%'
                handlePress={() => navigation.push('notification')}
              />
            ),
            headerTitle: "",
          })
    },
    notification:{
      screen:  notification,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: "#F94949" },
        headerShadowVisible: false,
         headerTitle: "Notification",
         headerTintColor: "white",
         headerTitleStyle: {
          fontWeight: "bold", // Set the font weight to bold
          fontSize: 25, // Adjust the font size as needed
        }
      })
    },
    Trackscreen:{
      screen:  Trackscreen,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
        ),
        headerRight: () => (
          <ScreenHeaderBtn
            iconUrl={icons.menu}
            dimension='60%'
            handlePress={() => navigation.push('notification')}
          />
        ),
        headerTitle: "",
      })
    },
    
    History:{
      screen:  History,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
        ),
        headerRight: () => (
          <ScreenHeaderBtn
            iconUrl={icons.menu}
            dimension='60%'
            handlePress={() => navigation.push('notification')}
          />
        ),
        headerTitle: "",
      })
    },
    Menu:{
      screen:  Menu,
      navigationOptions:
      {
        headerShown: false
      }
    },
    TrackerOg:{
      screen:  TrackerOg,
      navigationOptions: ({ navigation }) => ({
        headerStyle: { backgroundColor: COLORS.lightWhite },
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
        ),
        headerRight: () => (
          <ScreenHeaderBtn
            iconUrl={icons.menu}
            dimension='60%'
            handlePress={() => navigation.push('notification')}
          />
        ),
        headerTitle: "",
      })
    },
    

}
const HomeStack= createStackNavigator(Screens)

export default createAppContainer(HomeStack);