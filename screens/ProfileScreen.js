import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";

import Bio from "../components/profile_components/Bio";
import Wishlist from "../components/profile_components/Wishlist";
import Cart from "../components/profile_components/Cart";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ProfileScreen</Text>
      <Bio />
      <Wishlist />
      <Cart />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    margin: "8%",
  },
});
