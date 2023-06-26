import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";
import StoreScreen from "./screens/StoreScreen.js";

import home_selected from "./homepageIcons/Home_selected.png";
import bag_selected from "./homepageIcons/Bag_selected.png";
import vid_selected from "./homepageIcons/vid_selected.png";
import profile_selected from "./homepageIcons/profile_selected.png";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.background} />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconSource;

              if (route.name === "Home") {
                iconSource = home_selected;
              } else if (route.name === "Stores") {
                iconSource = bag_selected;
              } else if (route.name === "Orders") {
                iconSource = vid_selected;
              } else if (route.name === "Profile") {
                iconSource = profile_selected;
              }

              return (
                <Image
                  source={iconSource}
                  style={{ tintColor: color, width: size, height: size }}
                />
              );
            },
            tabBarLabelStyle: { display: "none" },
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "grey",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Stores" component={StoreScreen} />
          <Tab.Screen name="Orders" component={OrderScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  tabBar: {
    position: "absolute",
    left: "6%",
    right: "6%",
    bottom: "2%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 17,
    height: "7.5%",
  },
});

export default App;
