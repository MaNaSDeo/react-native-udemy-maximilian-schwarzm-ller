import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { type FC, useLayoutEffect, useContext } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { type StackParamList } from "../types";
import { MEALS } from "../Data/dummy-data";
import MealDetails from "../Components/MealDetails";
import Subtitle from "../Components/MealDetail/Subtitle";
import List from "../Components/MealDetail/List";
import IconButton from "../Components/IconButton";
// import { FavoritesContext } from "../store/context/favorites-context";
import { RootState } from "../store/redux";
import { useAppSelector, useAppDispatch } from "../store/redux/hooks";
import { addFavorite, removeFavorite } from "../store/redux/favorites-slice";

type Props = NativeStackScreenProps<StackParamList, "MealDetail">;

const MealDetailScreen: FC<Props> = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  /*
  const { favorites, removeFavorite, addFavorite } =
    useContext(FavoritesContext);
  const mealIsFavorite = favorites.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) removeFavorite(mealId);
    else addFavorite(mealId);
  }
*/

  const { favorites } = useAppSelector(
    (state: RootState) => state.favoriteMeals
  );
  const dispatch = useAppDispatch();

  const mealIsFavorite = favorites.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) dispatch(removeFavorite(mealId));
    else dispatch(addFavorite(mealId));
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        // return <Button title="Tap me!" onPress={headerButtonPressHandler} />;
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]); // Re-run effect if navigation object changes or if button handler updates

  // Handle case where meal is not found
  if (!selectedMeal) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>Meal not found!</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.mealItem}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <View style={styles.listOuterContainer}>
            <View style={styles.listInnerContainer}>
              <List data={selectedMeal.ingredients} />
            </View>
          </View>

          <Subtitle>Steps</Subtitle>

          <View style={styles.listOuterContainer}>
            <View style={styles.listInnerContainer}>
              <List data={selectedMeal.steps} numbered />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: "white",
  },
  text: {
    color: "white",
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "black",
  },
  detailText: {
    color: "black",
  },
  listContainer: {
    width: "100%",
    padding: 16,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listInnerContainer: {
    width: "100%",
  },
});
