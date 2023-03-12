import react from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonHeader() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      <Text>Little Lemon Restarant!</Text>
    </View>
  );
}
