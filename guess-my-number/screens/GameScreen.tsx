import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";

import Title from "../Components/UI/Title";
import NumberContainer from "../Components/Game/NumberContainer";

interface GameScreenProps {
  userNumber: number;
}

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) return generateRandomBetween(min, max, exclude);
  else return randomNumber;
};

function GameScreen({ userNumber }: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guesss */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        {/* + */}
        {/* - */}
      </View>
      <View>{/* Log Rounds */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
