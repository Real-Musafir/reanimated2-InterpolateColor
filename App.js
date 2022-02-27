import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

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
  const [theme, setTheme] = useState("light");
  return (
    <View style={styles.container}>
      <Switch
        value={theme === "dark"}
        onValueChange={(toggled) => {
          setTheme(toggled ? "dark" : "light");
        }}
        trackColor={SWITCH_TRACK_COLOR}
        thumbColor={"violet"}
      />
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
