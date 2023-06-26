import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";

import Stories from "../comp/Stories";
import Title from "../comp/Title";
import Posts from "../comp/Posts";

const StoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Stories />
        <Title />
        <Posts />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default StoreScreen;
