import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { StyleSheet, FlatList, View, ListRenderItem } from "react-native";
import { type RootStackParamList, type IMeal } from "../types";
import { MEALS } from "../Data/dummy-data";
import MealItem from "../Components/MealItem";

type Props = NativeStackScreenProps<RootStackParamList, "MealsOverview">;

const MealsOverviewScreen: FC<Props> = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem: ListRenderItem<IMeal> = ({ item }) => {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return (
      <MealItem
        // title={item.title}
        // imageUrl={item.imageUrl}
        // duration={item.duration}
        // complexity={item.complexity}
        // affordability={item.affordability}
        {...mealItemProps}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
