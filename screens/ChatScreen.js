import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";
import Stories from "../components/chat_components/Stories";
import ChatList from "../components/chat_components/ChatList";
const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ChatScreen</Text>
      <Stories />
      <ChatList />
    </SafeAreaView>
  );
};

export default ChatScreen;
const styles = StyleSheet.create({
  container: {
    marginTop: "8%",
  },
});
