import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/HomeScreen";
import DinnersScreen from "../components/DinnersScreen";

const Tab = createBottomTabNavigator();

const MyTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          // position: 'absolute',
          // bottom: 25
          // backgroundColor: '#F04226'
          backgroundColor: 'white'
        },
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
              <Image 
                source={require('../../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 25, 
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />
              <Text style={[styles.textStyle, {color: focused ? '#e32f45' : '#748c94'}]}>Home</Text>
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Dinners" 
        component={DinnersScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
              <Image 
                source={require('../../assets/icons/dinner.png')}
                resizeMode="contain"
                style={{
                  width: 25, 
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />
              <Text style={[styles.textStyle, {color: focused ? '#e32f45' : '#748c94'}]}>Dinners</Text>
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Settings"  
        component={HomeScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
              <Image 
                source={require('../../assets/icons/settings.png')}
                resizeMode="contain"
                style={{
                  width: 25, 
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94'
                }}
              />
              <Text style={[styles.textStyle, {color: focused ? '#e32f45' : '#748c94'}]}>Settings</Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10
  },
  textStyle: {
    fontSize: 12
  }
})

export default MyTabBar;
