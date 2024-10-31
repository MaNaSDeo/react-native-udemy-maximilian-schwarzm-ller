import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../Data/dummy-data";
import MealsList from "../Components/MealsList/MealsList";
import { useAppSelector } from "../store/redux/hooks";
import { RootState } from "../store/redux";

const FavoritesScreen = () => {
  // const { favorites } = useContext(FavoritesContext);
  const { favorites } = useAppSelector(
    (state: RootState) => state.favoriteMeals
  );

  const favoriteMeals = MEALS.filter((meal) => favorites.includes(meal.id));

  if (favoriteMeals.length === 0)
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
