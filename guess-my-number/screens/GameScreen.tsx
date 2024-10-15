import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Title from "../Components/UI/Title";
import NumberContainer from "../Components/Game/NumberContainer";
import PrimaryButton from "../Components/UI/PrimaryButton";
import InstuctionText from "../Components/UI/InstuctionText";
import Card from "../Components/UI/Card";
import GuessLogItem from "../Components/Game/GuessLogItem";

interface GameScreenProps {
  userNumber: number;
  onGameOver: (totalRounds: number) => void;
}

interface IGuessRounds {
  id: number;
  guess: number;
}

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) return generateRandomBetween(min, max, exclude);
  else return randomNumber;
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<IGuessRounds[]>([
    { id: 1, guess: initialGuess },
  ]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver(guessRounds.length);
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction: "lower" | "greater") {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "greater") {
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRandomNumber);
    setGuessRounds((prev: IGuessRounds[]) => [
      { guess: newRandomNumber, id: prev.length + 1 },
      ...prev,
    ]);
  }

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstuctionText style={styles.instructionText}>
          Higher or Lower?
        </InstuctionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 400) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("greater")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guesss */}
      {content}
      <View style={styles.listContainer}>
        {/* {guessRounds.map((guessRound: any) => (
          <Text key={guessRound.id}>{guessRound.guess}</Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={({ item }) => {
            // return <Text>{item.guess}</Text>;
            return <GuessLogItem roundNumber={item.id} guess={item.guess} />;
          }}
          keyExtractor={(item) => {
            return String(item.id);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  instructionText: { marginBottom: 24 },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default GameScreen;
