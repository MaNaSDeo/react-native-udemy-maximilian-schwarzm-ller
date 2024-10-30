import React, { FC } from "react";
import { FlatList, type ListRenderItem } from "react-native";
import { type NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CATEGORIES } from "../Data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";
import { type ICategory, type StackParamList } from "../types";

type CategoriesScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, "MealsOverview">;
};

const CategoriesScreen: FC<CategoriesScreenProps> = ({ navigation }) => {
  const renderCategoryItem: ListRenderItem<ICategory> = ({ item }) => {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
