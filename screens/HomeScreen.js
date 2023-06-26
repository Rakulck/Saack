import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import React from "react";
import Welcome from "../components/Welcome";
import Discount from "../components/Discount";
import Store from "../components/Store";
import Promotion from "../components/Promotion";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
      <View style={styles.Dcontainer}>
        <Discount />
      </View>
      <View>
        <Store />
      </View>
      <View>
        <Promotion />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    color: "white",
  },
  Dcontainer: {
    paddingTop: 30,
  },
});
