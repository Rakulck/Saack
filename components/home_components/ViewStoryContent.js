import React from "react";
import { View, Image, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
const ViewStoryContent = ({ isVisible, onClose, source, onNext, onPrev }) => {
  return (
    <Modal visible={isVisible} transparent>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={styles.modalContainer}
      >
        <View style={styles.imageContainer}>
          <Image source={source} style={styles.image} resizeMode="cover" />
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.prevButton} onPress={onPrev}>
          <Feather name="chevron-left" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={onNext}>
          <Feather name="chevron-right" size={50} color="white" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 15,
    overflow: "hidden",
    width: "80%",
    height: "70%",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    top: 30,
    right: 10,
    padding: 10,
  },
  prevButton: {
    position: "absolute",
    top: "45%",
    left: -1,
  },
  nextButton: {
    position: "absolute",
    top: "45%",
    right: -1,
  },
});

export default ViewStoryContent;
