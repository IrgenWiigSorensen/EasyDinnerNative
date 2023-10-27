import HomeScreen from "./src/components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dinners from "./src/components/DinnersScreen";
import MyTabBar from "./src/navigation/MyTabBar";

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MyTabBar />
    </NavigationContainer>
  );
}
