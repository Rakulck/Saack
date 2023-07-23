import React from "react";
import { View, TextInput } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";

const SearchBox = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingVertical: 10,
        position: "relative",
      }}
    >
      <Ionic
        name="search"
        style={{
          fontSize: 24,
          opacity: 0.7,
          position: "absolute",
          zIndex: 1,
          left: 25,
          color: "white",
        }}
      />
      <TextInput
        placeholder="Explore ......"
        placeholderTextColor="white"
        style={{
          width: "96%",
          paddingVertical: 10,
          backgroundColor: "white",
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          padding: 4,
          paddingLeft: 50,
          backgroundColor: "#343434",
        }}
      />
    </View>
  );
};

export default SearchBox;
