import React from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";

const Promotion = () => {
  const promotions = [
    {
      id: "1",
      image: require("../assets/peanut.jpeg"),
      description: "Peanut butter",
      des: "20%",
      date: "10/2/2023",
    },
    {
      id: "2",
      image: require("../assets/coffee.jpeg"),
      description: "Coffee",
      des: "40%",
      date: "10/2/2023",
    },
    {
      id: "3",
      image: require("../assets/shoes.png"),
      description: "Air-Jordan",
      des: "30%",
      date: "10/2/2023",
    },
    {
      id: "4",
      image: require("../assets/rolex.jpeg"),
      description: "Watch",
      des: "15%",
      date: "10/2/2023",
    },
    // Add more promotion items as needed
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{item.des}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Promotion campaign</Text>
      <FlatList
        data={promotions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default Promotion;

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    marginTop: 20,
    marginLeft: 1,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
  date: {
    fontSize: 13,
    color: "grey",
    textAlign: "center",
  },
});
