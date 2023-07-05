import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import Search from "../components/explore_components/Search";
import Products from "../components/explore_components/Products";

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Explore Screen</Text>
      <Search />
      <Products />
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: "8%",
  },
});
