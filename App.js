import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Colors = {
  dark: {
    backgroundColor: "#1E1E1E",
    circle: "#252525",
    text: "#F8F8F8",
  },
  light: {
    backgroundColor: "#F8F8F8",
    circle: "#FFF",
    text: "#1E1E1E",
  },
};

const SWITCH_TRACK_COLOR = {
  true: "rgba(256, 0, 256, 0.2)",
  false: "rgba(0,0,0,0.1)",
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text>asdf</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
