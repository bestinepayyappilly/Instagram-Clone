import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./Components/header";
import PostList from "./Components/PostList";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <View>
        <PostList />
      </View>

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
});
