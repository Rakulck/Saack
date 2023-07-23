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
        <TouchableOpacity activeOpacity={1} style={styles.imageContainer}>
          <Image source={source} style={styles.image} resizeMode="cover" />
          <TouchableOpacity
            style={[styles.navButton, { left: 0 }]}
            onPress={onPrev}
          >
            <Feather name="chevron-left" size={80} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navButton, { right: 0 }]}
            onPress={onNext}
          >
            <Feather name="chevron-right" size={80} opacity={0} color="white" />
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          style={styles.closeButton}
        >
          <Ionicons name="close" size={32} opacity={0} color="white" />
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
    width: "90%",
    height: "70%",
    backgroundColor: "white",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeButton: {
    position: "absolute",
    padding: 10,
    top: 20,
    right: 10,
  },
  navButton: {
    position: "absolute",
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    zIndex: 1, // To make the nav buttons clickable even if outside the image
    opacity: 0.5, // Adjust opacity for visibility
  },
});

export default ViewStoryContent;
