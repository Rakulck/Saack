import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import React from "react";

const Reels = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Reels</Text>
    </SafeAreaView>
  );
};

export default Reels;

const styles = StyleSheet.create({
  container: {
    marginTop: "8%",
  },
});
