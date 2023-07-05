import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Products = () => {
  // Sample product data
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    // Add more products as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <View style={styles.gridContainer}>
        {products.map((product) => (
          <View key={product.id} style={styles.productItem}>
            <Text style={styles.productName}>{product.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productItem: {
    width: "48%",
    height: 120,
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  productName: {
    fontSize: 16,
    color: "#333",
  },
});

export default Products;
