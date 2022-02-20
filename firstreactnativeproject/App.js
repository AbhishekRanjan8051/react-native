import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomComponents from "./src/screen/CustomComponents";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>welcome to first React Native APP</Text>
      <CustomComponents />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 32,
  },
});
