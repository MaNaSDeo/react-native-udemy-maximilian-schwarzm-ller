import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./Constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(7);

  const pickedNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) screen = <GameScreen />;

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safeArea}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#ddb52f",
  },
  backgroundImage: {
    opacity: 0.15,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
