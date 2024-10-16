import React from "react";
import { FlatList, type ListRenderItemInfo } from "react-native";
import { CATEGORIES } from "../Data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";
import { type ICategory } from "../Models/category";
const renderCategoryItem = (itemData: ListRenderItemInfo<ICategory>) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};
const CategoriesScreen = () => {
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
