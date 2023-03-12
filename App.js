import { StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import Footer from "./components/Footer";
import Poster from "./components/Poster";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to ReactNativeApp!</Text>
      <LittleLemonHeader />
      <Poster />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontWeight: "bold",
    fontSize: 100,
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
