import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";

import Stories from "../components/home_components/Stories";
import Title from "../components/home_components/Title";
import Posts from "../components/home_components/Posts";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Stories />
            <Title />
          </>
        }
        data={[{ key: "posts" }]}
        renderItem={({ item }) => <Posts />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default HomeScreen;
