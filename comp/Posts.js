import React from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import PostItem from "./Post.js/PostItem";

const Posts = () => {
  const data = [
    {
      postId: 1,
      dp: require("../assets/kemal.jpg"),
      name: "Punda Kumar",
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
    return <PostItem item={item} />;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.postId.toString()}
        renderItem={renderPost}
      />
      {/* <Text>wrfrw</Text> */}
    </ScrollView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    borderRadius: 12,
    marginTop: "2.5%",
    paddingHorizontal: "2%",
  },
});
