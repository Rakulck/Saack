import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";

const Stories = () => {
  const story = [
    {
      image: require("../assets/cola.jpeg"),
    },
    {
      image: require("../assets/favicon.png"),
    },
    {
      image: require("../assets/del.png"),
    },
    {
      image: require("../assets/del.png"),
    },
    {
      image: require("../assets/del.png"),
    },
    {
      image: require("../assets/del.png"),
    },
    {
      image: require("../assets/del.png"),
    },
    // Add more discount items as needed
  ];
  const renderStory = ({ item }) => {
    return (
      <View style={styles.storyContainer}>
        <View style={styles.storyContainerb}>
          <Image source={item.image} style={styles.storyImage} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={story}
        renderItem={renderStory}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default Stories;
const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    paddingHorizontal: "1%",
    backgroundColor: "black",
  },
  storyContainer: {
    flexDirection: "row",
    flex: 1,
    borderRadius: 10,
    borderColor: "white",
    marginLeft: 10,
  },
  storyImage: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
});
