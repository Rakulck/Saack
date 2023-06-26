import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";

const Discount = () => {
  const discounts = [
    {
      id: "1",
      title: "Discount 1",
      image: require("../assets/cola.jpeg"),
    },
    {
      id: "2",
      title: "Discount 2",
      image: require("../assets/favicon.png"),
    },
    {
      id: "3",
      title: "Discount 3",
      image: require("../assets/favicon.png"),
    },
    // Add more discount items as needed
  ];

  const renderDiscountItem = ({ item }) => {
    return (
      <View style={styles.discountItemContainer}>
        <Text style={styles.discountItemTitle}>{item.title}</Text>
        <Image source={item.image} style={styles.discountItemImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={discounts}
        renderItem={renderDiscountItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default Discount;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 10,
    marginRight: 50,
  },
  discountItemContainer: {
    flexDirection: "row",
    flex: 1,
    fontSize: 16,
    marginBottom: 5,
    paddingTop: 20,
    paddingHorizontal: 60,
    backgroundColor: "#87cefa",
    paddingBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 10,
  },
  discountItemTitle: {
    fontSize: 16,
    marginBottom: 5,
    marginRight: 5,
    color: "white",
  },
  discountItemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
