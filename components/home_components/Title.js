import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../homepageIcons/quick_actions.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>SACK</Text>
      </View>
      <View style={styles.profileImageContainer}>
        <Image
          source={require("../../assets/kemal.jpg")}
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
    backgroundColor: "black",
  },
  imgContainer: {
    marginRight: 10,
    backgroundColor: "#343434",
    borderRadius: 15,
  },
  img: {
    height: 44,
    width: 44,
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    color: "white",
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    // fontFamily: "Lobster",
  },
  profileImageContainer: {
    marginLeft: "auto",
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 15,
  },
});
