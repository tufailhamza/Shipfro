
import { Stack } from "expo-router";
import Navigator from "../app/routes/homestack"
const App = () => {
  return (
    <> 
    <Stack.Screen
    options={{headerShown:false}}/>
    <Navigator/>
    </>
  );
};

export default App;