import React from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";

import Stories from "../comp/Stories";
import Title from "../comp/Title";
import Posts from "../comp/Posts";

const StoreScreen = () => {
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
    backgroundColor: "#151515",
  },
});

export default StoreScreen;
