import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../assets/kemal.jpg")}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.topText}>Welcome to</Text>
        <Text style={styles.bottomText}>Sample restaurant</Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    top: 50,
  },
  profileImageContainer: {
    marginRight: 5,
    marginLeft: 25,
  },
  profileImage: {
    width: 20,
    height: 30,
    borderRadius: 20,
    padding: 16,
  },
  textContainer: {
    marginLeft: 10,
  },
  topText: {
    fontSize: 14,
  },
  bottomText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
