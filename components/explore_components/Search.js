import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Explore.." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    color: "#333",
  },
  input: {
    flex: 1,
    height: 42,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});

export default Search;
