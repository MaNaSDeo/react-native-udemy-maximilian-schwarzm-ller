import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { type RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewScreen: FC<Props> = ({ route }) => {
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>MealsOverviewScreen - {catId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverviewScreen;
