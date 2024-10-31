import React from "react";
import { View, FlatList, StyleSheet, type ListRenderItem } from "react-native";
import { type IMeal } from "../../types";
import MealItem from "./MealItem";

interface Props {
  items: IMeal[];
}

const MealsList = ({ items }: Props) => {
  const renderMealItem: ListRenderItem<IMeal> = ({ item }) => {
    const mealItemProps = {
      id: item.id,
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
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
