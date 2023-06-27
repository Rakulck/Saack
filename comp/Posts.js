import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

const Posts = () => {
  const data = [
    {
      postId: 1,
      dp: require("../assets/kemal.jpg"),
      name: "Punda Kumar ",
      wishlist: require("../homepageIcons/watchlist.png"),
      post: require("../assets/lbj.jpg"),
      description: "lorem ipsum dolor sit amet",
      like: require("../homepageIcons/like.png"),
      comment: require("../homepageIcons/comment.png"),
      share: require("../homepageIcons/share.png"),
      addToBag: require("../homepageIcons/Bag.png"),
    },
    {
      postId: 2,
      dp: require("../assets/cola.jpeg"),
      name: "Sam Kumar",
      wishlist: require("../homepageIcons/watchlist.png"),
      post: require("../assets/del.png"),
      description: "lorem ipsum dolor sit amet",
      like: require("../homepageIcons/like.png"),
      comment: require("../homepageIcons/comment.png"),
      share: require("../homepageIcons/share.png"),
      addToBag: require("../homepageIcons/Bag.png"),
    },
    {
      postId: 3,
      dp: require("../assets/kemal.jpg"),
      name: "ckrakul",
      wishlist: require("../homepageIcons/watchlist.png"),
      post: require("../assets/lbj.jpg"),
      description: "lorem ipsum dolor sit amet",
      like: require("../homepageIcons/like.png"),
      comment: require("../homepageIcons/comment.png"),
      share: require("../homepageIcons/share.png"),
      addToBag: require("../homepageIcons/Bag.png"),
    },
    // Add more posts as needed
  ];

  const renderPost = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.headerContainer}>
          <Image source={item.dp} style={styles.dp} />
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.wishlistContainer}>
            <Image source={item.wishlist} style={styles.wishlistIcon} />
          </View>
        </View>
        <Image source={item.post} style={styles.postImage} />

        <View style={styles.textContainer}>
          <Text style={styles.productName}>Lebron</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View style={styles.actionsContainer}>
          <View style={styles.likeContainer}>
            <View style={styles.likeButton}>
              <Image source={item.like} style={styles.actionIcon} />
            </View>
            <View style={styles.likeButton}>
              <Image source={item.comment} style={styles.actionIcon} />
            </View>
            <View style={styles.likeButton}>
              <Image source={item.share} style={styles.actionIcon} />
            </View>
          </View>
          <View style={styles.bagContainer}>
            <Text>Add to Bag {"\u00A0"}</Text>
            <Image source={item.addToBag} style={styles.actionIconbag} />
          </View>
        </View>

        <Text style={styles.boughtby}> Bought by</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.postId.toString()}
        renderItem={renderPost}
      />
      <Text></Text>
    </ScrollView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: "5%",
    paddingHorizontal: "5%",
  },
  postContainer: {
    marginVertical: "3%",
    borderRadius: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
    paddingHorizontal: "3%",
  },
  dp: {
    width: "10%",
    aspectRatio: 1,
    borderRadius: 8,
    marginRight: "2%",
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
    marginRight: "2%",
  },
  wishlistContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  wishlistIcon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  postImage: {
    width: "100%",
    height: 300,
    marginTop: "2%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "4%",
    paddingHorizontal: "2%",
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeButton: {
    backgroundColor: "#EDEDED",
    borderRadius: 10,
    paddingVertical: "1%",
    paddingHorizontal: "1%",
    marginRight: "2%",
  },
  bagContainer: {
    flexDirection: "row",
    backgroundColor: "grey",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "42%",
    height: "119%",
  },
  actionIconbag: {
    width: "16%",
    aspectRatio: 1,
    resizeMode: "contain",
    maxWidth: "100%",
  },
  actionIcon: {
    width: "100%",
    aspectRatio: 1,
    height: 27,
    resizeMode: "stretch",
    maxWidth: "100%",
  },
  textContainer: {
    flexDirection: "row",
  },
  productName: {
    fontSize: 15,
    marginLeft: "3%",
    color: "#333",
    fontWeight: "900",
    marginTop: "3%",
  },
  description: {
    fontSize: 15,
    marginLeft: "2%",
    color: "#333",
    fontWeight: "500",
    marginTop: "3%",
  },
  boughtby: {
    marginTop: "2%",
    marginLeft: "3%",
    fontSize: 14,
  },
});
