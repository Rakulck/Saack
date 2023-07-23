import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";

const PostItem = ({ item }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.headerContainer}>
        <Image source={item.dp} style={styles.dp} />
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.wishlistContainer}>
          <Feather name="bookmark" size={27} color="grey" />
        </View>
      </View>
      <Image source={item.post} style={styles.postImage} />

      <View style={styles.textContainer}>
        <Text style={styles.productName}>Lebron</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Feather name="heart" size={27} color="grey" />
          </View>
          <View style={styles.icon}>
            <Feather name="message-circle" size={27} color="grey" />
          </View>
          <View style={styles.icon}>
            <Ionicons name="paper-plane-sharp" size={27} color="grey" />
          </View>
        </View>
        <View style={styles.bagContainer}>
          <Text style={styles.bagContainerText}>Add to Bag</Text>
          <FontAwesome5 name="shopping-bag" size={24} color="grey" />
        </View>
      </View>

      <Text style={styles.boughtby}>Also Bought by ...</Text>
    </View>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  postContainer: {
    marginVertical: "1%",
    borderRadius: 15,
    marginBottom: "3%",
    backgroundColor: "#252525",
    paddingHorizontal: "3%",
    paddingVertical: "1%",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
    paddingHorizontal: "3%",
    paddingBottom: "1%",
  },
  dp: {
    width: "11%",
    aspectRatio: 1,
    borderRadius: 15,
    marginRight: "2%",
    resizeMode: "contain",
    marginBottom: "1%",
  },
  name: {
    fontWeight: "300",
    fontSize: 16,
    marginRight: "2%",
    color: "#FFFFFF",
    // fontFamily: "lobster",
  },
  wishlistContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  postImage: {
    width: "100%",
    height: 300,
    marginTop: "2%",
    resizeMode: "cover",
    borderRadius: 16,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "4%",
    paddingHorizontal: "5%",
    marginRight: "8%",
    marginLeft: "-3%",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#343434",
    borderRadius: 15,
    marginRight: "7%",
    padding: 5,
  },
  bagContainer: {
    flexDirection: "row",
    backgroundColor: "grey",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "55%",
    color: "#FFFFFF",
    height: "100%",
    backgroundColor: "#151515",
  },
  bagContainerText: {
    marginRight: "5%",
    color: "white",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    color: "white",
  },
  productName: {
    fontSize: 16,
    marginLeft: "3%",
    color: "#333",
    fontWeight: "700",
    marginTop: "3%",
    color: "#FFFFFF",
    // fontFamily: "Lobster",
  },
  description: {
    fontSize: 15,
    marginLeft: "2%",
    color: "#333",
    fontWeight: "300",
    marginTop: "3.5%",
    color: "#FFFFFF",
    // fontFamily: "Lobster",
  },
  boughtby: {
    marginTop: "2%",
    marginLeft: "3%",
    fontSize: 14,
    fontWeight: "300",
    color: "#FFFFFF",
    paddingBottom: "3%",
    // fontFamily: "Lobster",
  },
});
