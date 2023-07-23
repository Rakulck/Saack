import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import ViewStoryContent from "./ViewStoryContent";

const Stories = () => {
  const story = [
    {
      image: require("../../assets/posts1.jpg"),
    },
    {
      image: require("../../assets/posts3.jpg"),
    },
    {
      image: require("../../assets/posts12.jpg"),
    },
    {
      image: require("../../assets/posts4.jpg"),
    },
    {
      image: require("../../assets/posts7.jpg"),
    },
    {
      image: require("../../assets/posts9.jpg"),
    },
    {
      image: require("../../assets/posts10.jpg"),
    },
    // Add more story items as needed
  ];

  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);

  const handlePrevStory = () => {
    setSelectedStoryIndex((prevIndex) =>
      prevIndex === 0 ? null : prevIndex - 1
    );
  };

  const handleNextStory = () => {
    setSelectedStoryIndex((prevIndex) =>
      prevIndex === story.length - 1 ? null : prevIndex + 1
    );
  };

  const renderStory = ({ item, index }) => {
    const isSelected = index === selectedStoryIndex;

    return (
      <TouchableOpacity
        style={[
          styles.storyContainer,
          isSelected && styles.selectedStoryContainer,
        ]}
        onPress={() => setSelectedStoryIndex(index)}
      >
        <Image source={item.image} style={styles.storyImage} />
      </TouchableOpacity>
    );
  };

  const selectedStory = story[selectedStoryIndex]?.image; // Get the selected story image

  return (
    <View style={styles.container}>
      <FlatList
        data={story}
        renderItem={renderStory}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
      {/* Render the ViewStoryContent component when a story is selected */}
      <ViewStoryContent
        isVisible={selectedStoryIndex !== null}
        onClose={() => setSelectedStoryIndex(null)}
        source={selectedStory}
        onNext={handleNextStory}
        onPrev={handlePrevStory}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "1%",
    backgroundColor: "black",
    marginTop: "5%",
  },
  storyContainer: {
    flexDirection: "row",
    borderRadius: 15,
    borderColor: "white",
    marginLeft: 5,
    padding: 2,
  },
  selectedStoryContainer: {
    borderWidth: 2,
    borderColor: "white",
  },
  storyImage: {
    width: 65,
    height: 65,
    borderRadius: 10,
  },
});

export default Stories;
