import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";

const Store = () => {
  return (
    <View style={styles.container}>
      <View style={styles.objContainer}>
        <Image
          source={require("../assets/shop.jpg")}
          style={styles.imageContainer}
        />
        <Text style={styles.textTitle}>Store pickup</Text>
        <Text style={styles.textDescription}>Best Quality</Text>
      </View>
      <View style={styles.objContainer}>
        <Image
          source={require("../assets/del.png")}
          style={styles.imageContainer}
        />
        <Text style={styles.textTitle}>Delivery</Text>
        <Text style={styles.textDescription}>Always on time</Text>
      </View>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  objContainer: {
    padding: 10,
    paddingRight: 30,
  },
  imageContainer: {
    height: 90,
    width: 90,
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  textDescription: {
    color: "grey",
  },
});
