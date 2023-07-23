// ImageViewModal.js
import React from "react";
import {
  View,
  Modal,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const ImageViewModal = ({ isVisible, onClose, source }) => {
  if (!isVisible) return null;

  return (
    <Modal visible={isVisible} transparent onRequestClose={onClose}>
      <TouchableOpacity
        style={styles.modalContainer}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.modalContent}>
          <Image
            source={source}
            style={styles.modalImage}
            resizeMode="contain"
          />
        </View>
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
  modalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").height - 100,
    borderRadius: 15,
  },
});

export default ImageViewModal;
