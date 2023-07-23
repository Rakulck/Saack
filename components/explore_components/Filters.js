import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const Filters = () => {
  const data = [
    { id: "1", title: "ALL" },
    { id: "2", title: "Products" },
    { id: "3", title: "Sellers" },
    { id: "4", title: "Users" },
  ];

  const renderFilter = ({ item }) => {
    return <Text style={styles.filterItem}>{item.title}</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderFilter}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: "1%",
    marginBottom: 10,
  },
  filterItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 10,
    backgroundColor: "#343434",
    color: "white",
    borderRadius: 20,
    fontSize: 16,
  },
});

export default Filters;
