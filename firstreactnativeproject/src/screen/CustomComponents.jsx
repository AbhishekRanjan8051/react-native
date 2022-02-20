import React from "react";

import { Text, StyleSheet, View } from "react-native";

const CustomComponents = () => {
  const getFullName = (firstName, lastName) => {
    return `My Name is ${firstName} ${lastName}`;
  };
  return (
    <>
      <View>
        <Text style={styles.custom}>
          Hello world this line come from custom components file 🌵
        </Text>
        <Text style={styles.name}>{getFullName("Abhishek", "Ranjan")}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  custom: {
    color: "red",
    fontSize: 22,
    fontWeight: "bold",
  },
  name: {
    color: "white",
    fontSize: 18,
    fontStyle: "italic",
  },
});
export default CustomComponents;
