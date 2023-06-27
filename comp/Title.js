import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../homepageIcons/quick_actions.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>SAaCKs</Text>
      </View>
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../assets/kemal.jpg")}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "6%",
    paddingHorizontal: 20,
    color: "white",
    borderTopColor: "white",
  },
  imgContainer: {
    marginRight: 10,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    color: "white",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  profileImageContainer: {
    marginLeft: "auto",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
  },
});
