import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { type FC } from "react";
import { StyleSheet, Text } from "react-native";
import { type RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "MealDetail">;

const MealDetailScreen: FC<Props> = ({ route }) => {
  const mealId = route.params.mealId;
  return (
    <Text style={styles.text}>This is the Meal Detail Screen ({mealId})</Text>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
