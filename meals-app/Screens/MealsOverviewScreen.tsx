import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { type FC, useLayoutEffect } from "react";
import { type StackParamList, type IMeal } from "../types";
import { MEALS, CATEGORIES } from "../Data/dummy-data";
import MealsList from "../Components/MealsList/MealsList";

type Props = NativeStackScreenProps<StackParamList, "MealsOverview">;

const MealsOverviewScreen: FC<Props> = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    )?.title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
