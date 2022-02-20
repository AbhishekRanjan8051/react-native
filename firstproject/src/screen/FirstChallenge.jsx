import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FirstChallenge = () => {
  const yourname = "Abhi";
  return (
    <View>
      <Text style={styles.first}>Welcome to Abhishek Ranjan Party 🥳</Text>
      <Text style={styles.second}>We Love party with Abhishek 👍</Text>
      <Text style={styles.third}>My name is {yourname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  first: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 40,
  },
  second: {
    color: "red",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 30,
  },
  third: {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
  },
});

export default FirstChallenge;
